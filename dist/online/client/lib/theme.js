(function (window, theme) {
  //从localStorage中获取themeMode
  const themeMode = localStorage.getItem("themeMode") || "light";
  //设置html的class为themeMode
  document.documentElement.classList.add(themeMode);

  theme.toggleMode = function () {
    const themeMode = localStorage.getItem("themeMode") || "light";
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    document.documentElement.classList.remove(themeMode);
    document.documentElement.classList.add(newThemeMode);
    localStorage.setItem("themeMode", newThemeMode);
  };
})(window, window["theme"] || (window["theme"] = {}));
