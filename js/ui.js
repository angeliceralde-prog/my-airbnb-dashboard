function refreshUI() {
    document.querySelectorAll("h2")[0].innerText =
        `$${dashboardData.income.toLocaleString()}`;

    document.querySelectorAll("h2")[1].innerText =
        dashboardData.bookingsCount;

    document.querySelectorAll("h2")[3].innerText =
        dashboardData.activeGuests;

    const tbody = document.querySelector("tbody");

    tbody.innerHTML = dashboardData.recentBookings.map(b => `
        <tr class="border-b border-slate-50 hover:bg-slate-50">
            <td class="py-4 font-semibold">${b.guest}</td>
            <td class="py-4 text-slate-500">${b.dates}</td>
            <td class="py-4">${b.id}</td>
            <td class="py-4 font-bold text-indigo-600">$${b.amount}</td>
        </tr>
    `).join("");
}
