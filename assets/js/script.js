const sidebar = document.getElementById("sidebar");
const toggleBtn = document.querySelector(".toggle-btn");
const hamburgerBtn = document.querySelector(".hamburger-menu");
const sidebarCLose = document.querySelector(".sidebar-close");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});
hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
sidebarCLose.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !hamburgerBtn.contains(event.target)) {
    sidebar.classList.remove("active");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const languageDropdown = document.getElementById("languageDropdown");
  const dropdownMenu = document.getElementById("dropdownMenu");

  const languages = {
    az: { name: "AZ", flag: "./assets/icons/az.svg" },
    en: { name: "EN", flag: "./assets/icons/en.svg" },
    ru: { name: "RU", flag: "./assets/icons/ru.svg" },
  };

  if (dropdownMenu) {
    dropdownMenu.addEventListener("click", function (e) {
      if (e.target.closest(".dropdown-item")) {
        e.preventDefault();
        const selectedLang = e.target
          .closest(".dropdown-item")
          .getAttribute("data-lang");
        const selectedLanguage = languages[selectedLang];

        languageDropdown.innerHTML = `<img src="${selectedLanguage.flag}" alt="${selectedLanguage.name}" class="flag-icon"> ${selectedLanguage.name}`;

        const updatedDropdownMenu = Object.keys(languages)
          .filter((lang) => lang !== selectedLang)
          .map((lang) => {
            return `
                        <li>
                            <a class="dropdown-item" href="#" data-lang="${lang}">
                                <img src="${languages[lang].flag}" alt="${languages[lang].name}" class="flag-icon"> ${languages[lang].name}
                            </a>
                        </li>
                    `;
          })
          .join("");

        dropdownMenu.innerHTML = updatedDropdownMenu;
      }
    });
  }
});
if (typeof jQuery !== "undefined") {
  (function ($) {
    $(document).ready(function () {
      $(".selectpicker").selectpicker();
      $(".selectpicker").on("shown.bs.select", function () {
        var footerElement = $(this)
          .closest(".select-with-footer")
          .find(".hidden-footer .dropdown-menu-footer");

        var dropdownMenu = $(this).parent().find(".dropdown-menu");
        if (
          footerElement.length &&
          !dropdownMenu.find(".dropdown-menu-footer").length
        ) {
          dropdownMenu.append(footerElement.clone().show());
        }
      });
    });
  })(jQuery);
}
if (document.getElementById("toggleOldPassword")) {
  document
    .getElementById("toggleOldPassword")
    .addEventListener("click", function () {
      const passwordInput = document.getElementById("oldPassword");
      const icon = this;
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
      } else {
        passwordInput.type = "password";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
      }
    });

  document
    .getElementById("toggleNewPassword")
    .addEventListener("click", function () {
      const passwordInput = document.getElementById("newPassword");
      const icon = this;
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
      } else {
        passwordInput.type = "password";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
      }
    });
}

document.querySelectorAll('.table-row').forEach(row => {
  row.addEventListener('click', function (e) {
      // Tıklanan satırın içindeki dropdown menüyü al
      const dropdownMenu = row.querySelector('.dropdown-menu-custom');

      // Eğer menü mevcut değilse, işlemi sonlandır
      if (!dropdownMenu) return;

      // Eğer menü zaten açık ise, kapat ve işlemi sonlandır
      if (dropdownMenu.classList.contains('show')) {
          dropdownMenu.classList.remove('show');
          return;
      }

      // Diğer açık olan dropdownları kapat
      document.querySelectorAll('.dropdown-menu-custom').forEach(menu => {
          menu.classList.remove('show');
      });

      // Tıklanan menüyü aç (show sınıfını ekle)
      dropdownMenu.classList.add('show');

      // Menüyü satırın sol alt köşesine yerleştir
      const rect = row.getBoundingClientRect();
      dropdownMenu.style.top = `${rect.bottom + window.scrollY}px`;
      dropdownMenu.style.left = `${rect.left + window.scrollX}px`;

      // Diğer olayların tetiklenmesini engelle
      e.stopPropagation();
  });
});

// Sayfa tıklaması durumunda menüyü gizle
document.addEventListener('click', function () {
  document.querySelectorAll('.dropdown-menu-custom').forEach(menu => {
      menu.classList.remove('show');
  });
});

