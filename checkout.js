// CraveRush Checkout Module

document.addEventListener("DOMContentLoaded", () => {
  // Let loader complete, then initialize
  setTimeout(() => {
    initCheckout();
  }, 100);
});

function initCheckout() {
  const emptyState = document.getElementById("empty-checkout");
  const activeGrid = document.getElementById("active-checkout");

  if (!state.cart || state.cart.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    if (activeGrid) activeGrid.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (activeGrid) activeGrid.style.display = "grid";

  // Populate address from localStorage if exists
  loadSavedAddress();

  // Initial Calculation & UI Sync
  recalculateBill();

  // Setup listeners
  setupCheckoutListeners();
}

function loadSavedAddress() {
  try {
    const saved = JSON.parse(localStorage.getItem("craverush_saved_address"));
    if (saved) {
      document.getElementById("address-name").value = saved.name || "";
      document.getElementById("address-phone").value = saved.phone || "";
      document.getElementById("address-flat").value = saved.flat || "";
      document.getElementById("address-street").value = saved.street || "";
      document.getElementById("address-landmark").value = saved.landmark || "";
      document.getElementById("address-city").value = saved.city || "";
      document.getElementById("address-state").value = saved.state || "";
      document.getElementById("address-pincode").value = saved.pincode || "";
    } else if (state.user) {
      document.getElementById("address-name").value = state.user.name || "";
    }
  } catch (e) {
    console.error("Error loading saved address:", e);
  }
}

function getDeliveryFees() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isFreeDeliveryEligible = subtotal >= 499;
  return {
    standard: isFreeDeliveryEligible ? 0 : 49,
    express: isFreeDeliveryEligible ? 40 : 89
  };
}

function recalculateBill() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Calculate discount based on global state appliedCoupon
  let discount = 0;
  if (state.appliedCoupon === "CRAVE50") {
    discount = Math.min(Math.round(subtotal * 0.5), 150);
  } else if (state.appliedCoupon === "WELCOME100") {
    discount = Math.min(100, subtotal);
  }

  const fees = getDeliveryFees();
  
  // Update option label price tags
  const standardText = document.getElementById("price-standard-text");
  const expressText = document.getElementById("price-express-text");
  if (standardText) standardText.textContent = fees.standard === 0 ? "FREE" : `₹${fees.standard}`;
  if (expressText) expressText.textContent = `₹${fees.express}`;

  // Get active speed
  const selectedSpeedEl = document.querySelector('input[name="delivery-speed"]:checked');
  const deliveryOption = selectedSpeedEl ? selectedSpeedEl.value : "standard";
  const deliveryFee = deliveryOption === "express" ? fees.express : fees.standard;

  const platformFee = 10;
  const tax = Math.round(subtotal * 0.05);
  const grandTotal = Math.max(0, subtotal - discount + deliveryFee + platformFee + tax);

  // Update Summary DOM
  const restaurantName = state.cart.length > 0 ? state.cart[0].restaurantName : "CraveRush Partner";
  const restaurantNameEl = document.getElementById("checkout-restaurant-name");
  if (restaurantNameEl) restaurantNameEl.textContent = restaurantName;

  const summaryItems = document.getElementById("checkout-summary-items");
  if (summaryItems) {
    summaryItems.innerHTML = state.cart.map(item => `
      <div class="summary-item">
        <img src="${item.image}" alt="${item.name}" class="summary-item-img">
        <div class="summary-item-details">
          <div class="summary-item-name">${item.name}</div>
          <div class="summary-item-meta">Qty: ${item.quantity} × ₹${item.price}</div>
        </div>
        <div class="summary-item-price">₹${item.price * item.quantity}</div>
      </div>
    `).join("");
  }

  const subtotalEl = document.getElementById("checkout-subtotal");
  const discountRow = document.getElementById("checkout-discount-row");
  const discountEl = document.getElementById("checkout-discount");
  const deliveryFeeEl = document.getElementById("checkout-delivery-fee");
  const platformFeeEl = document.getElementById("checkout-platform-fee");
  const taxEl = document.getElementById("checkout-tax");
  const totalEl = document.getElementById("checkout-total");

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = "flex";
      discountEl.textContent = `-₹${discount}`;
    } else {
      discountRow.style.display = "none";
    }
  }
  if (deliveryFeeEl) deliveryFeeEl.textContent = deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`;
  if (platformFeeEl) platformFeeEl.textContent = `₹${platformFee}`;
  if (taxEl) taxEl.textContent = `₹${tax}`;
  if (totalEl) totalEl.textContent = `₹${grandTotal}`;
}

function setupCheckoutListeners() {
  // 1. Delivery option labels toggling
  const delStandardInput = document.getElementById("del-standard");
  const delExpressInput = document.getElementById("del-express");
  const labelStandard = document.getElementById("label-del-standard");
  const labelExpress = document.getElementById("label-del-express");

  if (delStandardInput && delExpressInput) {
    delStandardInput.addEventListener("change", () => {
      labelStandard.classList.add("active");
      labelExpress.classList.remove("active");
      recalculateBill();
    });
    delExpressInput.addEventListener("change", () => {
      labelExpress.classList.add("active");
      labelStandard.classList.remove("active");
      recalculateBill();
    });
  }

  // 2. Payment option labels toggling
  const payMethods = document.querySelectorAll('input[name="payment-method"]');
  payMethods.forEach(method => {
    method.addEventListener("change", (e) => {
      // Toggle active classes on labels
      document.querySelectorAll('input[name="payment-method"]').forEach(inp => {
        inp.closest('.option-label').classList.remove("active");
      });
      e.target.closest('.option-label').classList.add("active");

      // Show hide sections
      const selected = e.target.value;
      const upiFields = document.getElementById("fields-upi");
      const cardFields = document.getElementById("fields-card");

      if (upiFields) upiFields.classList.toggle("active", selected === "upi");
      if (cardFields) cardFields.classList.toggle("active", selected === "card");
      
      // Clear inputs validation when switching payment modes
      clearInputValidation("upi-id", "err-upi-id");
      clearInputValidation("card-number", "err-card-number");
      clearInputValidation("card-name", "err-card-name");
      clearInputValidation("card-expiry", "err-card-expiry");
      clearInputValidation("card-cvv", "err-card-cvv");
    });
  });

  // Expiry date formatter (adds / automatically)
  const cardExpiry = document.getElementById("card-expiry");
  if (cardExpiry) {
    cardExpiry.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "");
      if (val.length >= 2) {
        val = val.slice(0, 2) + "/" + val.slice(2, 4);
      }
      e.target.value = val;
    });
  }

  // Card number formatter (adds spaces every 4 digits)
  const cardNumber = document.getElementById("card-number");
  if (cardNumber) {
    cardNumber.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "");
      let formatted = val.match(/.{1,4}/g);
      e.target.value = formatted ? formatted.join(" ") : "";
    });
  }

  // Set up field input correction listeners to clear validation errors live
  const fields = [
    { id: "address-name", err: "err-address-name" },
    { id: "address-phone", err: "err-address-phone" },
    { id: "address-flat", err: "err-address-flat" },
    { id: "address-street", err: "err-address-street" },
    { id: "address-city", err: "err-address-city" },
    { id: "address-state", err: "err-address-state" },
    { id: "address-pincode", err: "err-address-pincode" },
    { id: "upi-id", err: "err-upi-id" },
    { id: "card-number", err: "err-card-number" },
    { id: "card-name", err: "err-card-name" },
    { id: "card-expiry", err: "err-card-expiry" },
    { id: "card-cvv", err: "err-card-cvv" }
  ];

  fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) {
      el.addEventListener("input", () => {
        clearInputValidation(f.id, f.err);
      });
    }
  });

  // 3. Place Order Button click
  const placeOrderBtn = document.getElementById("place-order-btn");
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", handlePlaceOrder);
  }
}

function clearInputValidation(id, errId) {
  const el = document.getElementById(id);
  const err = document.getElementById(errId);
  if (el) el.classList.remove("invalid");
  if (err) err.style.display = "none";
}

function setInputInvalid(id, errId) {
  const el = document.getElementById(id);
  const err = document.getElementById(errId);
  if (el) el.classList.add("invalid");
  if (err) err.style.display = "block";
}

function validateCheckoutForm() {
  let isValid = true;

  // Address validations
  const name = document.getElementById("address-name").value.trim();
  const phone = document.getElementById("address-phone").value.trim();
  const flat = document.getElementById("address-flat").value.trim();
  const street = document.getElementById("address-street").value.trim();
  const city = document.getElementById("address-city").value.trim();
  const stateVal = document.getElementById("address-state").value.trim();
  const pincode = document.getElementById("address-pincode").value.trim();

  if (!name) { setInputInvalid("address-name", "err-address-name"); isValid = false; }
  
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phone || !phoneRegex.test(phone.replace(/\s+/g, ""))) {
    setInputInvalid("address-phone", "err-address-phone");
    isValid = false;
  }

  if (!flat) { setInputInvalid("address-flat", "err-address-flat"); isValid = false; }
  if (!street) { setInputInvalid("address-street", "err-address-street"); isValid = false; }
  if (!city) { setInputInvalid("address-city", "err-address-city"); isValid = false; }
  if (!stateVal) { setInputInvalid("address-state", "err-address-state"); isValid = false; }
  
  const pinRegex = /^\d{6}$/;
  if (!pincode || !pinRegex.test(pincode)) {
    setInputInvalid("address-pincode", "err-address-pincode");
    isValid = false;
  }

  // Payment validations
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

  if (paymentMethod === "upi") {
    const upiId = document.getElementById("upi-id").value.trim();
    const upiRegex = /^[\w.-]+@[\w.-]+$/;
    if (!upiId || !upiRegex.test(upiId)) {
      setInputInvalid("upi-id", "err-upi-id");
      isValid = false;
    }
  } else if (paymentMethod === "card") {
    const cardNumVal = document.getElementById("card-number").value.replace(/\s+/g, "");
    const cardNameVal = document.getElementById("card-name").value.trim();
    const cardExpiryVal = document.getElementById("card-expiry").value.trim();
    const cardCvvVal = document.getElementById("card-cvv").value.trim();

    if (!cardNumVal || cardNumVal.length < 15 || cardNumVal.length > 16 || /\D/.test(cardNumVal)) {
      setInputInvalid("card-number", "err-card-number");
      isValid = false;
    }

    if (!cardNameVal) {
      setInputInvalid("card-name", "err-card-name");
      isValid = false;
    }

    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!cardExpiryVal || !expiryRegex.test(cardExpiryVal)) {
      setInputInvalid("card-expiry", "err-card-expiry");
      isValid = false;
    } else {
      // Validate expiry date is in future
      const parts = cardExpiryVal.split("/");
      const expMonth = parseInt(parts[0], 10);
      const expYear = parseInt("20" + parts[1], 10);
      const now = new Date();
      const currMonth = now.getMonth() + 1;
      const currYear = now.getFullYear();
      if (expYear < currYear || (expYear === currYear && expMonth < currMonth)) {
        setInputInvalid("card-expiry", "err-card-expiry");
        isValid = false;
      }
    }

    const cvvRegex = /^\d{3,4}$/;
    if (!cardCvvVal || !cvvRegex.test(cardCvvVal)) {
      setInputInvalid("card-cvv", "err-card-cvv");
      isValid = false;
    }
  }

  return isValid;
}

function handlePlaceOrder() {
  if (!validateCheckoutForm()) {
    showToast("Please fix the validation errors in the form.");
    
    // Smooth scroll to first invalid field
    const firstInvalid = document.querySelector(".form-control.invalid");
    if (firstInvalid) {
      firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  const btn = document.getElementById("place-order-btn");
  const btnText = document.getElementById("place-order-text");
  
  if (btn) {
    btn.classList.add("processing");
    btn.disabled = true;
  }
  if (btnText) btnText.textContent = "Simulating secure payment...";

  // Disable form input fields during simulation
  const inputs = document.querySelectorAll("#checkout-form input");
  inputs.forEach(i => i.disabled = true);

  // Simulated gateway delay
  setTimeout(() => {
    completeOrder();
  }, 2000);
}

function completeOrder() {
  try {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let discount = 0;
    if (state.appliedCoupon === "CRAVE50") {
      discount = Math.min(Math.round(subtotal * 0.5), 150);
    } else if (state.appliedCoupon === "WELCOME100") {
      discount = Math.min(100, subtotal);
    }

    const fees = getDeliveryFees();
    const deliveryOption = document.querySelector('input[name="delivery-speed"]:checked').value;
    const deliveryFee = deliveryOption === "express" ? fees.express : fees.standard;
    const platformFee = 10;
    const tax = Math.round(subtotal * 0.05);
    const grandTotal = Math.max(0, subtotal - discount + deliveryFee + platformFee + tax);

    const restaurantName = state.cart.length > 0 ? state.cart[0].restaurantName : "CraveRush Partner";
    
    const addressDetails = {
      name: document.getElementById("address-name").value.trim(),
      phone: document.getElementById("address-phone").value.trim(),
      flat: document.getElementById("address-flat").value.trim(),
      street: document.getElementById("address-street").value.trim(),
      landmark: document.getElementById("address-landmark").value.trim(),
      city: document.getElementById("address-city").value.trim(),
      state: document.getElementById("address-state").value.trim(),
      pincode: document.getElementById("address-pincode").value.trim()
    };

    // Save address if checked
    const saveCheck = document.getElementById("save-address-checkbox");
    if (saveCheck && saveCheck.checked) {
      localStorage.setItem("craverush_saved_address", JSON.stringify(addressDetails));
    }

    const payMethod = document.querySelector('input[name="payment-method"]:checked').value;
    let paymentDisplay = "Cash on Delivery";
    if (payMethod === "upi") {
      paymentDisplay = "UPI (" + document.getElementById("upi-id").value.trim() + ")";
    } else if (payMethod === "card") {
      const cardNum = document.getElementById("card-number").value.replace(/\s+/g, "");
      paymentDisplay = "Card (ending in •••• " + cardNum.slice(-4) + ")";
    }

    const orderId = "CR-" + Math.floor(100000 + Math.random() * 900000);
    const orderDate = new Date().toLocaleString();

    // Construct final Order Object matching spec
    const orderObject = {
      orderId: orderId,
      date: orderDate,
      items: [...state.cart],
      restaurant: restaurantName,
      address: addressDetails,
      deliveryOption: deliveryOption === "express" ? "Express Delivery (20-Min)" : "Standard Delivery (35-Min)",
      paymentMethod: paymentDisplay,
      subtotal: subtotal,
      deliveryFee: deliveryFee,
      platformFee: platformFee,
      tax: tax,
      discount: discount,
      total: grandTotal,
      status: "Order Confirmed",
      statusStep: 1,
      estimatedMinutes: deliveryOption === "express" ? 20 : 35
    };

    // Write to Local Storage
    state.activeOrder = orderObject;
    localStorage.setItem("craverush_active_order", JSON.stringify(orderObject));

    // Clear cart in state & localStorage
    state.cart = [];
    state.appliedCoupon = null;
    state.discountAmount = 0;
    localStorage.setItem("craverush_cart", JSON.stringify([]));

    // Show toast & Redirect
    showToast("Order placed successfully! 🚀");
    
    setTimeout(() => {
      window.location.href = "confirmation.html";
    }, 500);

  } catch (e) {
    console.error("Order placement failed:", e);
    
    // Enable form fields again
    const btn = document.getElementById("place-order-btn");
    const btnText = document.getElementById("place-order-text");
    if (btn) {
      btn.classList.remove("processing");
      btn.disabled = false;
    }
    if (btnText) btnText.textContent = "Place Order & Pay";

    const inputs = document.querySelectorAll("#checkout-form input");
    inputs.forEach(i => i.disabled = false);

    showToast("Something went wrong placing the order. Please try again.");
  }
}
