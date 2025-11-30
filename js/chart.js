const salesData = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 150 },
  { month: "Mar", value: 180 },
  { month: "Apr", value: 200 },
  { month: "May", value: 170 },
];

const userData = [
  { day: "Mon", users: 300 },
  { day: "Tue", users: 280 },
  { day: "Wed", users: 350 },
  { day: "Thu", users: 320 },
  { day: "Fri", users: 400 },
];

const revenueData = [
  { date: "2025-01-01", income: 500000 },
  { date: "2025-01-02", income: 650000 },
  { date: "2025-01-03", income: 480000 },
  { date: "2025-01-04", income: 700000 },
  { date: "2025-01-05", income: 550000 },
];

const select = document.querySelector("select");
let myChart;

const chart = (sD, uD, rD) => {
  select.addEventListener("change", () => {
    if (myChart) {
      myChart.destroy();
    }

    if (select.value === "sales") {
      myChart = new Chart(document.querySelector("#grafik-1"), {
        type: "bar",
        data: {
          labels: sD.map((i) => i.month),
          datasets: [
            {
              label: "Banyak Penjualan Bulanan",
              data: sD.map((i) => i.value),
            },
          ],
        },
      });
    }

    if (select.value === "user") {
      myChart = new Chart(document.querySelector("#grafik-1"), {
        type: "doughnut",
        data: {
          labels: uD.map((i) => i.day),
          datasets: [
            {
              label: "Jumlah User Harian",
              data: uD.map((i) => i.users),
            },
          ],
        },
      });
      return;
    }

    if (select.value === "revenue") {
      myChart = new Chart(document.querySelector("#grafik-1"), {
        type: "pie",
        data: {
          labels: rD.map((i) => i.date),
          datasets: [
            {
              label: "Pendapatan Harian",
              data: rD.map((i) => i.income),
            },
          ],
        },
      });
    }
  });
};

chart(salesData, userData, revenueData);
