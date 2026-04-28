function createNewBooking() {
    const price = 540;

    dashboardData.income += price;
    dashboardData.bookingsCount += 1;
    dashboardData.activeGuests += 1;

    const newId = `#INV-${Date.now()}`;

    dashboardData.recentBookings.unshift({
        guest: "New Guest",
        dates: "Aug 10 - 12",
        id: newId,
        amount: price
    });

    refreshUI();
}
