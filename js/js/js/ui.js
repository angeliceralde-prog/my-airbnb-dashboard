function refreshUI() {
    document.querySelector(".bg-[#5d45d6] h2").innerText =
        `$${dashboardData.income.toLocaleString()}`;

    document.querySelector(".bg-[#4eb3f3] h2").innerText =
        dashboardData.bookingsCount;

    document.querySelector(".bg-[#b1d34b] h2").innerText =
        dashboardData.activeGuests;

    const tbody = document.querySelector("tbody");
    if (!tbody) return;

    tbody.innerHTML = dashboardData.recentBookings.map(b => `
        <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
            <td class="py-4 font-semibold">${b.guest}</td>
            <td class="py-4 text-slate-500">${b.dates}</td>
            <td class="py-4">
                <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                    ${b.id}
                </span>
            </td>
            <td class="py-4 font-bold text-indigo-600">
                $${b.amount.toFixed(2)}
            </td>
        </tr>
    `).join("");
}
