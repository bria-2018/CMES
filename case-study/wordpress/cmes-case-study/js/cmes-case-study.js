/* CMES case study — accessible tabs (WAI-ARIA pattern), no dependencies */
(function () {
  'use strict';

  document.querySelectorAll('[data-tabs]').forEach(function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    var vertical = root.querySelector('[role="tablist"]').getAttribute('aria-orientation') === 'vertical';

    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab, false); });
      tab.addEventListener('keydown', function (e) {
        var next = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (e.key === 'Home') { e.preventDefault(); return select(tabs[0], true); }
        if (e.key === 'End') { e.preventDefault(); return select(tabs[tabs.length - 1], true); }
        if (!next) return;
        if (!vertical && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) return;
        e.preventDefault();
        select(tabs[(i + next + tabs.length) % tabs.length], true);
      });
    });
  });

  // Stagger the hero chart bars
  document.querySelectorAll('.portal__chart b').forEach(function (b, i) { b.style.setProperty('--i', i); });
})();
