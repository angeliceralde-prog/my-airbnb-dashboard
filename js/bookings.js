function createNewBooking() {
    dashboardData.income += 540;
    dashboardData.bookingsCount += 1;
    dashboardData.activeGuests += 1;

    dashboardData.recentBookings.unshift({
        guest: "New Guest",
        dates: "Aug 10 - 12",
        id: "#INV-" + Date.now(),
        amount: 540
    });

    refreshUI();
}
