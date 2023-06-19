const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");
const sidebar_profile = document.querySelector(".sidebar_profile");


let BASE_URL="http://localhost:8000/admin"
async function getAdmin(){
sidebar_profile.innerHTML=''
  let res= await axios(BASE_URL)
  let data=res.data
  data.forEach((element) => {
  sidebar_profile.innerHTML+=`
  <span class="nav_image">
            <img src="${element.img}" alt="logo_img" />
          </span>
          <div class="data_text">
            <span class="name">${element.username}</span>
            <span class="email">${element.email}</span>
          </div> 
  `})
}
getAdmin()

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
  sidebar.classList.toggle("locked");
  // If the sidebar is not locked
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
  } else {
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
};

// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 800) {
  sidebar.classList.add("close");
  sidebar.classList.remove("locked");
  sidebar.classList.remove("hoverable");
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);


////////// DARK MODE
const BUTTON = document.querySelector(".toggle");
!localStorage.getItem("mode") && localStorage.setItem("mode","false")
BUTTON.addEventListener("click",function() {
    const IS_PRESSED = localStorage.getItem("mode") 
    document.body.setAttribute("data-dark-mode", IS_PRESSED=="false" ? false : true);
    BUTTON.setAttribute("aria-pressed", IS_PRESSED=="false" ? false : true);
    localStorage.getItem("mode") =="false" ?localStorage.setItem("mode","true") : localStorage.setItem( "mode","false")
})
window.addEventListener("load" ,function(){
    if(localStorage.getItem("mode")=="false"){
        document.body.setAttribute("data-dark-mode",true);
        BUTTON.setAttribute("aria-pressed" ,true);
    }
})
// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
    series: [{
      data: [10, 8, 6, 4, 2],
      name: "Products",
    }],
    chart: {
      type: "bar",
      background: "transparent",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: [
      "#2962ff",
      "#d50000",
      "#2e7d32",
      "#ff6d00",
      "#583cb3",
    ],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: "40%",
      }
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: "#55596e",
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: "#f5f7ff",
      },
      show: true,
      position: "top",
    },
    stroke: {
      colors: ["transparent"],
      show: true,
      width: 2
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: "dark",
    },
    xaxis: {
      categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
      title: {
        style: {
          color: "#f5f7ff",
        },
      },
      axisBorder: {
        show: true,
        color: "#55596e",
      },
      axisTicks: {
        show: true,
        color: "#55596e",
      },
      labels: {
        style: {
          colors: "#f5f7ff",
        },
      },
    },
    yaxis: {
      title: {
        text: "Count",
        style: {
          color:  "#f5f7ff",
        },
      },
      axisBorder: {
        color: "#55596e",
        show: true,
      },
      axisTicks: {
        color: "#55596e",
        show: true,
      },
      labels: {
        style: {
          colors: "#f5f7ff",
        },
      },
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();
  
  
  // AREA CHART
  var areaChartOptions = {
    series: [{
      name: "Purchase Orders",
      data: [31, 40, 28, 51, 42, 109, 100],
    }, {
      name: "Sales Orders",
      data: [11, 32, 45, 32, 34, 52, 41],
    }],
    chart: {
      type: "area",
      background: "transparent",
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#00ab57", "#d50000"],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: "vertical",
      },
      type: "gradient",
    },
    grid: {
      borderColor: "#55596e",
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: "#f5f7ff",
      },
      show: true,
      position: "top",
    },
    markers: {
      size: 6,
      strokeColors: "#1b2635",
      strokeWidth: 3,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      axisBorder: {
        color: "#55596e",
        show: true,
      },
      axisTicks: {
        color: "#55596e",
        show: true,
      },
      labels: {
        offsetY: 5,
        style: {
          colors: "#f5f7ff",
        },
      },
    },
    yaxis: 
    [
      {
        title: {
          text: "Purchase Orders",
          style: {
            color: "#f5f7ff",
          },
        },
        labels: {
          style: {
            colors: ["#f5f7ff"],
          },
        },
      },
      {
        opposite: true,
        title: {
          text: "Sales Orders",
          style: {
            color:  "#f5f7ff",
          },
        },
        labels: {
          style: {
            colors: ["#f5f7ff"],
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: "dark",
    }
  };
  
  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();
