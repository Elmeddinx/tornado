const sidebar = document.getElementById("sidebar");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

document.addEventListener("DOMContentLoaded", function () {
  const languageDropdown = document.getElementById("languageDropdown");
  const dropdownMenu = document.getElementById("dropdownMenu");

  const languages = {
    az: { name: "AZ", flag: "./assets/icons/az.svg" },
    en: { name: "EN", flag: "./assets/icons/en.svg" },
    ru: { name: "RU", flag: "./assets/icons/ru.svg" },
  };

  // Olay delegasyonu: tüm dropdown öğelerine dinleyici ekle
  if (dropdownMenu) {
    dropdownMenu.addEventListener("click", function (e) {
      if (e.target.closest(".dropdown-item")) {
        e.preventDefault();
        const selectedLang = e.target
          .closest(".dropdown-item")
          .getAttribute("data-lang");
        const selectedLanguage = languages[selectedLang];

        // Güncelleme: Seçilen dili dropdown butonuna aktar
        languageDropdown.innerHTML = `<img src="${selectedLanguage.flag}" alt="${selectedLanguage.name}" class="flag-icon"> ${selectedLanguage.name}`;

        // Diğer dillerin dropdown menüde görünmesi için içeriği güncelle
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

$(document).ready(function () {
  $(".selectpicker").selectpicker();
  $(".selectpicker").on("shown.bs.select", function () {
    var footerElement = $(this).closest(".select-with-footer").find(".hidden-footer .dropdown-menu-footer");

    // Dropdown menüsünü bul
    var dropdownMenu = $(this).parent().find(".dropdown-menu");
    // Eğer footer varsa ve dropdown menüsüne daha önce eklenmemişse
    if (footerElement.length && !dropdownMenu.find(".dropdown-menu-footer").length) {
        dropdownMenu.append(footerElement.clone().show());
    }
});

});
