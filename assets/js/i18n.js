(function () {
  "use strict";

  var SUPPORTED_LANGS = ["vi", "en"];
  var DEFAULT_LANG = "vi";

  /* =========================================================
   * Translation dictionary
   * Keys map to data-i18n / data-i18n-placeholder attributes.
   * Values can contain simple HTML (span/br/strong) since some
   * source strings already include inline markup.
   * ========================================================= */
  var translations = {
    vi: {
      "invitation.message":
        'TRÂN TRỌNG KÍNH MỜI QUÝ KHÁCH<br />ĐẾN DỰ BỮA CƠM THÂN MẬT MỪNG<strong>LỄ CƯỚI</strong> CỦA',
      "invitation.groom_name": 'Đình Phúc',
      "invitation.bride_name": 'Bích Ngọc',
      "invitation.timeLabel": 'VÀO LÚC <strong>18H00</strong>',
      "invitation.weekday": 'THỨ BẢY',
      "invitation.lunar_date": "(Nhằm ngày 3 tháng 7 năm Bính Ngọ)",
      "invitation.venueName": "The Myst Đồng Khởi",
      "invitation.venueAddress":
        '6–8 Hồ Huấn Nghiệp, Phường Sài Gòn, Thành phố Hồ Chí Minh',
      "invitation.mapButton": 'CLICK ĐỂ XEM BẢN ĐỒ',

      "timeline.item1": 'Đón khách',
      "timeline.item2": 'Làm lễ',
      "timeline.item3": 'Khai tiệc',
      "timeline.item4": 'First dance',
      "timeline.item5": 'Game',
      "timeline.subtext":
        '<span>Lưu ý:</span> Khách iu vui lòng đến <span>đúng giờ</span> để đảm bảo chương trình <br>và ánh sáng đẹp nhất cho Lễ Cưới',
      "timeline.dresscodeSubtext":
        'BUỔI TIỆC SẼ TUYỆT VỜI HƠN KHI KHÁCH MỜI <br>CÓ THỂ MANG TRANG PHỤC VỚI NHỮNG TONE MÀU DƯỚI ĐÂY:',
      "album.subtext": 'CÙNG XEM BST CỦA CHÚNG MÌNH NHÉ!',

      "rsvp.title": "Xác nhận tham dự",
      "rsvp.subtitle":
        'KHÁCH MỜI VUI LÒNG <br> XÁC NHẬN THAM DỰ TRƯỚC <strong>NGÀY 01/08</strong>.',
      "rsvp.namePlaceholder": 'Tên khách mời',
      "rsvp.guests_number": 'Số người đi kèm',
      "rsvp.confirmRelatedSubtitle": 'BẠN LÀ BẠN BÈ, ĐỒNG NGHIỆP HAY NGƯỜI THÂN CỦA...?',
      "rsvp.confirmSubtitle":
        'BẠN SẼ ĐẾN THAM GIA TIỆC CƯỚI ĐỈNH NÓC, KỊCH TRẦN, <br>BAY PHẤP PHỚI CỦA CHÚNG MÌNH CHỨ?',
      "rsvp.yes": 'Sẽ tham dự',
      "rsvp.no": 'Không tham dự',
      "rsvp.guestsSubtitle": 'BẠN CÓ “TỆP ĐÍNH KÈM” CÙNG TỚI TIỆC CƯỚI KHÔNG? <br />',
      "rsvp.alone": 'Chỉ có tôi và sự cô đơn',
      "rsvp.child": 'Tôi đi cùng trẻ nhỏ',
      "rsvp.related_subtitle": "Quý khách có yêu cầu đặc biệt về thức ăn không?",
      "rsvp.normal": "Ăn mặn",
      "rsvp.vegetarian": "Ăn chay",
      "rsvp.messageSubtitle": 'GỬI MỘT VÀI LỜI IU THƯƠNG DÀNH CHO CHÚNG MÌNH NHA ^^',
      "rsvp.messagePlaceholder": 'QUÝ KHÁCH CÓ LỜI CHÚC HAY NHẮN GỬI ĐẾN CÔ DÂU VÀ CHÚ RỂ KHÔNG?',
      "rsvp.submit": 'Xác nhận',

      "yenstudio.textMain": 'HẸN GẶP LẠI BẠN!'
    },
    en: {
      "invitation.message":
        'TRÂN TRỌNG KÍNH MỜI QUÝ KHÁCH<br />ĐẾN DỰ BỮA CƠM THÂN MẬT MỪNG<strong>LỄ CƯỚI</strong> CỦA',
      "invitation.groom_name": 'Elias Tran',
      "invitation.bride_name": 'Jade Nguyen',
      "invitation.timeLabel": 'AT <strong>18:00</strong>',
      "invitation.weekday": 'SATURDAY',
      "invitation.lunar_date": "(Nhằm ngày 3 tháng 7 năm Bính Ngọ)",
      "invitation.venueName": "The Myst Đong Khoi",
      "invitation.venueAddress":
        '6–8 Ho Huan Nghiep Street, Sai Gon Ward, Ho Chi Minh City',
      "invitation.mapButton": 'CLICK ĐỂ XEM BẢN ĐỒ',

      "timeline.item1": 'Welcome',
      "timeline.item2": 'Làm lễ',
      "timeline.item3": 'Dinner',
      "timeline.item4": 'First dance',
      "timeline.item5": 'Game',
      "timeline.subtext":
        '<span>Lưu ý:</span> Khách iu vui lòng đến <span>đúng giờ</span> để đảm bảo chương trình <br>và ánh sáng đẹp nhất cho Lễ Cưới',
      "timeline.dresscodeSubtext":
        'BUỔI TIỆC SẼ TUYỆT VỜI HƠN KHI KHÁCH MỜI <br>CÓ THỂ MANG TRANG PHỤC VỚI NHỮNG TONE MÀU DƯỚI ĐÂY:',
      "album.subtext": 'TAKE A LOOK AT OUR WEDDING ALBUM!',

      "rsvp.title": "ATTENDANCE CONFIRMATION",
      "rsvp.subtitle": "KINDLY <br> REPLY BY <strong>AUGUST 1ST</strong>.",
      "rsvp.namePlaceholder": "Your Name",
      "rsvp.guests_number": "Number of Plus-Ones",
      "rsvp.confirmRelatedSubtitle": "ARE YOU A FRIEND, COLLEAGUE, OR FAMILY MEMBER OF...?",
      "rsvp.confirmSubtitle": "ARE YOU READY TO PARTY WITH US <br> AT THE WEDDING OF THE YEAR?",
      "rsvp.yes": "Joyfully Attending",
      "rsvp.no": "Sorry, Can't Make It",
      "rsvp.guestsSubtitle": "WILL YOU BE BRINGING A PLUS-ONE? <br />",
      "rsvp.alone": "Just Me, Myself & I",
      "rsvp.child": "I'll Bring My Little One",
      "rsvp.related_subtitle": "Do you have any special dietary requirements?",
      "rsvp.normal": "Regular Meal",
      "rsvp.vegetarian": "Vegetarian Meal",
      "rsvp.messageSubtitle": "SEND US SOME LOVE ^^",
      "rsvp.messagePlaceholder": "ANY WISHES OR MESSAGES FOR THE HAPPY COUPLE?",
      "rsvp.submit": "Confirm RSVP",
      "yenstudio.textMain": "SEE YOU THERE!"
    }
  };

  var switcherLabels = { vi: "Tiếng Anh", en: "Vietnamese" };

  function isSupported(lang) {
    return SUPPORTED_LANGS.indexOf(lang) !== -1;
  }

  function getLangFromURL() {
    var params = new URLSearchParams(window.location.search);
    var lang = params.get("lang");
    return isSupported(lang) ? lang : null;
  }

  function updateURL(lang) {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    } catch (e) {
      /* ignore for very old browsers */
    }
  }

  function applyTranslations(lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    var switcher = document.getElementById("langSwitcher");
    if (switcher) {
      switcher.textContent = switcherLabels[lang] || switcherLabels[DEFAULT_LANG];
      switcher.setAttribute("data-current-lang", lang);
    }
  }

  function hidePopup() {
    var overlay = document.getElementById("langOverlay");
    if (overlay) {
      overlay.classList.remove("is-visible");
    }
  }

  function showPopup() {
    var overlay = document.getElementById("langOverlay");
    if (overlay) {
      overlay.classList.add("is-visible");
    }
  }

  function selectLang(lang, options) {
    if (!isSupported(lang)) return;
    var opts = options || {};

    applyTranslations(lang);
    updateURL(lang);
    hidePopup();

    if (!opts.silent) {
      document.dispatchEvent(
        new CustomEvent("langchange", { detail: { lang: lang } })
      );
    }
  }

  function initPopupButtons() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function initSwitcher() {
    var switcher = document.getElementById("langSwitcher");
    if (!switcher) return;
    switcher.addEventListener("click", function () {
      var current = switcher.getAttribute("data-current-lang") || DEFAULT_LANG;
      var next = current === "vi" ? "en" : "vi";
      selectLang(next);
    });
  }

  function init() {
    initPopupButtons();
    initSwitcher();

    var urlLang = getLangFromURL();

    if (urlLang) {
      // Language is chosen via URL param; no popup needed.
      applyTranslations(urlLang);
    } else {
      // No lang param: show the language picker so the visitor can choose.
      applyTranslations(DEFAULT_LANG);
      showPopup();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
