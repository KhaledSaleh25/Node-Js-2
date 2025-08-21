// An order: { id, customer, item, qty, status }   status ∈ "new" | "paid" | "packed" | "shipped" | "canceled"
let nextId = 1;
const orders = []; // keep simple for the exercise

function createOrder(customer, item, qty) {
    if(customer.trim() === "" || item.trim() === "" || isNaN(qty) || qty <= 0) {
        return { ok: false, error: "Invalid input" };
    }
    const order = {
        id: nextId++,
        customer: customer.trim(),
        item: item.trim(),
        qty: Number(qty),
        status: "new"
    };
    orders.push(order);
    return { ok: true, order };
    // validate inputs (non-empty customer/item, qty > 0)
    // If invalid, return { ok:false, error:"message" }

    // Create a new order with the following properties:
    // id: nextId++,
    // customer: customer.trim(),
    // item: item.trim(),
    // qty: Number(qty),
    // status: "new"

    // Add the order to the orders array

    // Return { ok:true, order }
}

function findById(id) {
    for(let order of orders) {
        if(order.id === id) {
            return order;
        }
    }   
    // classic loop to find the order by id from the orders array
    // Return the order if found, otherwise return null
}

function list() {
    return [...orders];
    // return a shallow copy of the orders array
}

function setStatus(id, newStatus) {
    const order = findById(id);
    if (!order) {
        return { ok: false, error: "Order not found" };
    }
    order.status = newStatus;
    return { ok: true, order };
}

// export the functions to be used in the application
module.exports = {
    createOrder,
    findById,
    list,
    setStatus
};
