import"./dynamic-import-polyfill.feac7147.js";import{v as r,a as l}from"./vendor.ce0c5a8e.js";/* empty css                            */import{n as c,l as d,t as b}from"./vueComponentNormalizer.3eea0038.js";var y=`/*! Buefy v0.9.6 | MIT License | github.com/buefy/buefy */
@charset "UTF-8";
.is-noscroll {
  position: fixed;
  overflow-y: hidden;
  width: 100%;
  bottom: 0;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.fadeOut {
  animation-name: fadeOut;
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}
.fadeOutDown {
  animation-name: fadeOutDown;
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.fadeOutUp {
  animation-name: fadeOutUp;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fadeIn {
  animation-name: fadeIn;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.fadeInDown {
  animation-name: fadeInDown;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}

/**
 * Vue Transitions
 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.zoom-in-enter-active,
.zoom-in-leave-active {
  transition: opacity 150ms ease-out;
}
.zoom-in-enter-active .animation-content,
.zoom-in-enter-active .animation-content,
.zoom-in-leave-active .animation-content,
.zoom-in-leave-active .animation-content {
  transition: transform 150ms ease-out;
}

.zoom-in-enter,
.zoom-in-leave-active {
  opacity: 0;
}
.zoom-in-enter .animation-content,
.zoom-in-enter .animation-content,
.zoom-in-leave-active .animation-content,
.zoom-in-leave-active .animation-content {
  transform: scale(0.95);
}

.zoom-out-enter-active,
.zoom-out-leave-active {
  transition: opacity 150ms ease-out;
}
.zoom-out-enter-active .animation-content,
.zoom-out-enter-active .animation-content,
.zoom-out-leave-active .animation-content,
.zoom-out-leave-active .animation-content {
  transition: transform 150ms ease-out;
}

.zoom-out-enter,
.zoom-out-leave-active {
  opacity: 0;
}
.zoom-out-enter .animation-content,
.zoom-out-enter .animation-content,
.zoom-out-leave-active .animation-content,
.zoom-out-leave-active .animation-content {
  transform: scale(1.05);
}

.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.slide-prev-leave-to, .slide-next-enter {
  transform: translate3d(-100%, 0, 0);
  position: absolute;
  width: 100%;
}

.slide-prev-enter, .slide-next-leave-to {
  transform: translate3d(100%, 0, 0);
  position: absolute;
  width: 100%;
}

.slide-down-enter-active,
.slide-down-leave-active,
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.slide-up-leave-to, .slide-down-enter {
  transform: translate3d(0, -100%, 0);
  position: absolute;
  height: 100%;
}

.slide-up-enter, .slide-down-leave-to {
  transform: translate3d(0, 100%, 0);
  position: absolute;
  height: 100%;
}

.slide-enter-active {
  transition: 150ms ease-out;
}

.slide-leave-active {
  transition: 150ms ease-out;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter, .slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

/*! bulma.io v0.9.2 | MIT License | github.com/jgthms/bulma */
/* Bulma Utilities */
.pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis, .file-cta,
.file-name, .select select, .taginput .taginput-container.is-focusable, .textarea, .input, .button {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
}
.pagination-previous:focus,
.pagination-next:focus,
.pagination-link:focus,
.pagination-ellipsis:focus, .file-cta:focus,
.file-name:focus, .select select:focus, .taginput .taginput-container.is-focusable:focus, .textarea:focus, .input:focus, .button:focus, .is-focused.pagination-previous,
.is-focused.pagination-next,
.is-focused.pagination-link,
.is-focused.pagination-ellipsis, .is-focused.file-cta,
.is-focused.file-name, .select select.is-focused, .taginput .is-focused.taginput-container.is-focusable, .is-focused.textarea, .is-focused.input, .is-focused.button, .pagination-previous:active,
.pagination-next:active,
.pagination-link:active,
.pagination-ellipsis:active, .file-cta:active,
.file-name:active, .select select:active, .taginput .taginput-container.is-focusable:active, .textarea:active, .input:active, .button:active, .is-active.pagination-previous,
.is-active.pagination-next,
.is-active.pagination-link,
.is-active.pagination-ellipsis, .is-active.file-cta,
.is-active.file-name, .select select.is-active, .taginput .is-active.taginput-container.is-focusable, .is-active.textarea, .is-active.input, .is-active.button {
  outline: none;
}
[disabled].pagination-previous,
[disabled].pagination-next,
[disabled].pagination-link,
[disabled].pagination-ellipsis, [disabled].file-cta,
[disabled].file-name, .select select[disabled], .taginput [disabled].taginput-container.is-focusable, [disabled].textarea, [disabled].input, [disabled].button, fieldset[disabled] .pagination-previous,
fieldset[disabled] .pagination-next,
fieldset[disabled] .pagination-link,
fieldset[disabled] .pagination-ellipsis, fieldset[disabled] .file-cta,
fieldset[disabled] .file-name, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .taginput .taginput-container.is-focusable, .taginput fieldset[disabled] .taginput-container.is-focusable, fieldset[disabled] .textarea, fieldset[disabled] .input, fieldset[disabled] .button {
  cursor: not-allowed;
}

.switch, .b-radio.radio, .b-checkbox.checkbox, .carousel-list, .carousel, .is-unselectable, .tabs, .pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis, .breadcrumb, .file, .button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.navbar-link:not(.is-arrowless)::after, .select:not(.is-multiple):not(.is-loading)::after {
  border: 3px solid transparent;
  border-radius: 2px;
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: rotate(-45deg);
  transform-origin: center;
  width: 0.625em;
}

.tabs:not(:last-child), .pagination:not(:last-child), .message:not(:last-child), .level:not(:last-child), .breadcrumb:not(:last-child), .highlight:not(:last-child), .block:not(:last-child), .title:not(:last-child),
.subtitle:not(:last-child), .table-container:not(:last-child), .table:not(:last-child), .progress:not(:last-child), .progress-wrapper.is-not-native:not(:last-child), .notification:not(:last-child), .content:not(:last-child), .box:not(:last-child) {
  margin-bottom: 1.5rem;
}

.modal-close, .delete {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: rgba(10, 10, 10, 0.2);
  border: none;
  border-radius: 290486px;
  cursor: pointer;
  pointer-events: auto;
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 0;
  height: 20px;
  max-height: 20px;
  max-width: 20px;
  min-height: 20px;
  min-width: 20px;
  outline: none;
  position: relative;
  vertical-align: top;
  width: 20px;
}
.modal-close::before, .delete::before, .modal-close::after, .delete::after {
  background-color: white;
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform-origin: center center;
}
.modal-close::before, .delete::before {
  height: 2px;
  width: 50%;
}
.modal-close::after, .delete::after {
  height: 50%;
  width: 2px;
}
.modal-close:hover, .delete:hover, .modal-close:focus, .delete:focus {
  background-color: rgba(10, 10, 10, 0.3);
}
.modal-close:active, .delete:active {
  background-color: rgba(10, 10, 10, 0.4);
}
.is-small.modal-close, .is-small.delete {
  height: 16px;
  max-height: 16px;
  max-width: 16px;
  min-height: 16px;
  min-width: 16px;
  width: 16px;
}
.is-medium.modal-close, .is-medium.delete {
  height: 24px;
  max-height: 24px;
  max-width: 24px;
  min-height: 24px;
  min-width: 24px;
  width: 24px;
}
.is-large.modal-close, .is-large.delete {
  height: 32px;
  max-height: 32px;
  max-width: 32px;
  min-height: 32px;
  min-width: 32px;
  width: 32px;
}

.control.is-loading::after, .select.is-loading::after, .loader, .button.is-loading::after {
  animation: spinAround 500ms infinite linear;
  border: 2px solid #dbdbdb;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
}

.b-image-wrapper > img.has-ratio, .b-image-wrapper > img.placeholder, .hero-video, .is-overlay, .modal-background, .modal, .image.is-square img,
.image.is-square .has-ratio, .image.is-1by1 img,
.image.is-1by1 .has-ratio, .image.is-5by4 img,
.image.is-5by4 .has-ratio, .image.is-4by3 img,
.image.is-4by3 .has-ratio, .image.is-3by2 img,
.image.is-3by2 .has-ratio, .image.is-5by3 img,
.image.is-5by3 .has-ratio, .image.is-16by9 img,
.image.is-16by9 .has-ratio, .image.is-2by1 img,
.image.is-2by1 .has-ratio, .image.is-3by1 img,
.image.is-3by1 .has-ratio, .image.is-4by5 img,
.image.is-4by5 .has-ratio, .image.is-3by4 img,
.image.is-3by4 .has-ratio, .image.is-2by3 img,
.image.is-2by3 .has-ratio, .image.is-3by5 img,
.image.is-3by5 .has-ratio, .image.is-9by16 img,
.image.is-9by16 .has-ratio, .image.is-1by2 img,
.image.is-1by2 .has-ratio, .image.is-1by3 img,
.image.is-1by3 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

/* Bulma Base */
/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select,
textarea {
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

img,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}
td:not([align]),
th:not([align]) {
  text-align: inherit;
}

html {
  background-color: white;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  min-width: 300px;
  overflow-x: hidden;
  overflow-y: scroll;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
}

article,
aside,
figure,
footer,
header,
hgroup,
section {
  display: block;
}

body,
button,
input,
optgroup,
select,
textarea {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

code,
pre {
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
  font-family: monospace;
}

body {
  color: #4a4a4a;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
}

a {
  color: #7957d5;
  cursor: pointer;
  text-decoration: none;
}
a strong {
  color: currentColor;
}
a:hover {
  color: #363636;
}

code {
  background-color: whitesmoke;
  color: #da1039;
  font-size: 0.875em;
  font-weight: normal;
  padding: 0.25em 0.5em 0.25em;
}

hr {
  background-color: whitesmoke;
  border: none;
  display: block;
  height: 2px;
  margin: 1.5rem 0;
}

img {
  height: auto;
  max-width: 100%;
}

input[type=checkbox],
input[type=radio] {
  vertical-align: baseline;
}

small {
  font-size: 0.875em;
}

span {
  font-style: inherit;
  font-weight: inherit;
}

strong {
  color: #363636;
  font-weight: 700;
}

fieldset {
  border: none;
}

pre {
  -webkit-overflow-scrolling: touch;
  background-color: whitesmoke;
  color: #4a4a4a;
  font-size: 0.875em;
  overflow-x: auto;
  padding: 1.25rem 1.5rem;
  white-space: pre;
  word-wrap: normal;
}
pre code {
  background-color: transparent;
  color: currentColor;
  font-size: 1em;
  padding: 0;
}

table td,
table th {
  vertical-align: top;
}
table td:not([align]),
table th:not([align]) {
  text-align: inherit;
}
table th {
  color: #363636;
}

@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
/* Bulma Elements */
.box {
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}

a.box:hover, a.box:focus {
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #7957d5;
}
a.box:active {
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #7957d5;
}

.button {
  background-color: white;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
}
.button strong {
  color: inherit;
}
.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {
  height: 1.5em;
  width: 1.5em;
}
.button .icon:first-child:not(:last-child) {
  margin-left: calc(-0.5em - 1px);
  margin-right: 0.25em;
}
.button .icon:last-child:not(:first-child) {
  margin-left: 0.25em;
  margin-right: calc(-0.5em - 1px);
}
.button .icon:first-child:last-child {
  margin-left: calc(-0.5em - 1px);
  margin-right: calc(-0.5em - 1px);
}
.button:hover, .button.is-hovered {
  border-color: #b5b5b5;
  color: #363636;
}
.button:focus, .button.is-focused {
  border-color: #7957d5;
  color: #363636;
}
.button:focus:not(:active), .button.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
}
.button:active, .button.is-active {
  border-color: #4a4a4a;
  color: #363636;
}
.button.is-text {
  background-color: transparent;
  border-color: transparent;
  color: #4a4a4a;
  text-decoration: underline;
}
.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {
  background-color: whitesmoke;
  color: #363636;
}
.button.is-text:active, .button.is-text.is-active {
  background-color: #e8e8e8;
  color: #363636;
}
.button.is-text[disabled], fieldset[disabled] .button.is-text {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}
.button.is-ghost {
  background: none;
  border-color: transparent;
  color: #7957d5;
  text-decoration: none;
}
.button.is-ghost:hover, .button.is-ghost.is-hovered {
  color: #7957d5;
  text-decoration: underline;
}
.button.is-white {
  background-color: white;
  border-color: transparent;
  color: #0a0a0a;
}
.button.is-white:hover, .button.is-white.is-hovered {
  background-color: #f9f9f9;
  border-color: transparent;
  color: #0a0a0a;
}
.button.is-white:focus, .button.is-white.is-focused {
  border-color: transparent;
  color: #0a0a0a;
}
.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}
.button.is-white:active, .button.is-white.is-active {
  background-color: #f2f2f2;
  border-color: transparent;
  color: #0a0a0a;
}
.button.is-white[disabled], fieldset[disabled] .button.is-white {
  background-color: white;
  border-color: transparent;
  box-shadow: none;
}
.button.is-white.is-inverted {
  background-color: #0a0a0a;
  color: white;
}
.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {
  background-color: black;
}
.button.is-white.is-inverted[disabled], fieldset[disabled] .button.is-white.is-inverted {
  background-color: #0a0a0a;
  border-color: transparent;
  box-shadow: none;
  color: white;
}
.button.is-white.is-loading::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}
.button.is-white.is-outlined {
  background-color: transparent;
  border-color: white;
  color: white;
}
.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {
  background-color: white;
  border-color: white;
  color: #0a0a0a;
}
.button.is-white.is-outlined.is-loading::after {
  border-color: transparent transparent white white !important;
}
.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}
.button.is-white.is-outlined[disabled], fieldset[disabled] .button.is-white.is-outlined {
  background-color: transparent;
  border-color: white;
  box-shadow: none;
  color: white;
}
.button.is-white.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  color: #0a0a0a;
}
.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {
  background-color: #0a0a0a;
  color: white;
}
.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent white white !important;
}
.button.is-white.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-white.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  box-shadow: none;
  color: #0a0a0a;
}
.button.is-black {
  background-color: #0a0a0a;
  border-color: transparent;
  color: white;
}
.button.is-black:hover, .button.is-black.is-hovered {
  background-color: #040404;
  border-color: transparent;
  color: white;
}
.button.is-black:focus, .button.is-black.is-focused {
  border-color: transparent;
  color: white;
}
.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
}
.button.is-black:active, .button.is-black.is-active {
  background-color: black;
  border-color: transparent;
  color: white;
}
.button.is-black[disabled], fieldset[disabled] .button.is-black {
  background-color: #0a0a0a;
  border-color: transparent;
  box-shadow: none;
}
.button.is-black.is-inverted {
  background-color: white;
  color: #0a0a0a;
}
.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-black.is-inverted[disabled], fieldset[disabled] .button.is-black.is-inverted {
  background-color: white;
  border-color: transparent;
  box-shadow: none;
  color: #0a0a0a;
}
.button.is-black.is-loading::after {
  border-color: transparent transparent white white !important;
}
.button.is-black.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  color: #0a0a0a;
}
.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: white;
}
.button.is-black.is-outlined.is-loading::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}
.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent white white !important;
}
.button.is-black.is-outlined[disabled], fieldset[disabled] .button.is-black.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  box-shadow: none;
  color: #0a0a0a;
}
.button.is-black.is-inverted.is-outlined {
  background-color: transparent;
  border-color: white;
  color: white;
}
.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {
  background-color: white;
  color: #0a0a0a;
}
.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}
.button.is-black.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-black.is-inverted.is-outlined {
  background-color: transparent;
  border-color: white;
  box-shadow: none;
  color: white;
}
.button.is-light {
  background-color: whitesmoke;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light:hover, .button.is-light.is-hovered {
  background-color: #eeeeee;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light:focus, .button.is-light.is-focused {
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}
.button.is-light:active, .button.is-light.is-active {
  background-color: #e8e8e8;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light[disabled], fieldset[disabled] .button.is-light {
  background-color: whitesmoke;
  border-color: transparent;
  box-shadow: none;
}
.button.is-light.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
}
.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {
  background-color: rgba(0, 0, 0, 0.7);
}
.button.is-light.is-inverted[disabled], fieldset[disabled] .button.is-light.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: transparent;
  box-shadow: none;
  color: whitesmoke;
}
.button.is-light.is-loading::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-light.is-outlined {
  background-color: transparent;
  border-color: whitesmoke;
  color: whitesmoke;
}
.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {
  background-color: whitesmoke;
  border-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light.is-outlined.is-loading::after {
  border-color: transparent transparent whitesmoke whitesmoke !important;
}
.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-light.is-outlined[disabled], fieldset[disabled] .button.is-light.is-outlined {
  background-color: transparent;
  border-color: whitesmoke;
  box-shadow: none;
  color: whitesmoke;
}
.button.is-light.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {
  background-color: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
}
.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent whitesmoke whitesmoke !important;
}
.button.is-light.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-light.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-dark {
  background-color: #363636;
  border-color: transparent;
  color: #fff;
}
.button.is-dark:hover, .button.is-dark.is-hovered {
  background-color: #2f2f2f;
  border-color: transparent;
  color: #fff;
}
.button.is-dark:focus, .button.is-dark.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}
.button.is-dark:active, .button.is-dark.is-active {
  background-color: #292929;
  border-color: transparent;
  color: #fff;
}
.button.is-dark[disabled], fieldset[disabled] .button.is-dark {
  background-color: #363636;
  border-color: transparent;
  box-shadow: none;
}
.button.is-dark.is-inverted {
  background-color: #fff;
  color: #363636;
}
.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-dark.is-inverted[disabled], fieldset[disabled] .button.is-dark.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #363636;
}
.button.is-dark.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-dark.is-outlined {
  background-color: transparent;
  border-color: #363636;
  color: #363636;
}
.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {
  background-color: #363636;
  border-color: #363636;
  color: #fff;
}
.button.is-dark.is-outlined.is-loading::after {
  border-color: transparent transparent #363636 #363636 !important;
}
.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-dark.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-outlined {
  background-color: transparent;
  border-color: #363636;
  box-shadow: none;
  color: #363636;
}
.button.is-dark.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #363636;
}
.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #363636 #363636 !important;
}
.button.is-dark.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-primary {
  background-color: #7957d5;
  border-color: transparent;
  color: #fff;
}
.button.is-primary:hover, .button.is-primary.is-hovered {
  background-color: #714dd2;
  border-color: transparent;
  color: #fff;
}
.button.is-primary:focus, .button.is-primary.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
}
.button.is-primary:active, .button.is-primary.is-active {
  background-color: #6943d0;
  border-color: transparent;
  color: #fff;
}
.button.is-primary[disabled], fieldset[disabled] .button.is-primary {
  background-color: #7957d5;
  border-color: transparent;
  box-shadow: none;
}
.button.is-primary.is-inverted {
  background-color: #fff;
  color: #7957d5;
}
.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-primary.is-inverted[disabled], fieldset[disabled] .button.is-primary.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #7957d5;
}
.button.is-primary.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-primary.is-outlined {
  background-color: transparent;
  border-color: #7957d5;
  color: #7957d5;
}
.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {
  background-color: #7957d5;
  border-color: #7957d5;
  color: #fff;
}
.button.is-primary.is-outlined.is-loading::after {
  border-color: transparent transparent #7957d5 #7957d5 !important;
}
.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-primary.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-outlined {
  background-color: transparent;
  border-color: #7957d5;
  box-shadow: none;
  color: #7957d5;
}
.button.is-primary.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #7957d5;
}
.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #7957d5 #7957d5 !important;
}
.button.is-primary.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-primary.is-light {
  background-color: #f2effb;
  color: #552fbc;
}
.button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {
  background-color: #eae4f8;
  border-color: transparent;
  color: #552fbc;
}
.button.is-primary.is-light:active, .button.is-primary.is-light.is-active {
  background-color: #e2daf6;
  border-color: transparent;
  color: #552fbc;
}
.button.is-link {
  background-color: #7957d5;
  border-color: transparent;
  color: #fff;
}
.button.is-link:hover, .button.is-link.is-hovered {
  background-color: #714dd2;
  border-color: transparent;
  color: #fff;
}
.button.is-link:focus, .button.is-link.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
}
.button.is-link:active, .button.is-link.is-active {
  background-color: #6943d0;
  border-color: transparent;
  color: #fff;
}
.button.is-link[disabled], fieldset[disabled] .button.is-link {
  background-color: #7957d5;
  border-color: transparent;
  box-shadow: none;
}
.button.is-link.is-inverted {
  background-color: #fff;
  color: #7957d5;
}
.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-link.is-inverted[disabled], fieldset[disabled] .button.is-link.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #7957d5;
}
.button.is-link.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-link.is-outlined {
  background-color: transparent;
  border-color: #7957d5;
  color: #7957d5;
}
.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {
  background-color: #7957d5;
  border-color: #7957d5;
  color: #fff;
}
.button.is-link.is-outlined.is-loading::after {
  border-color: transparent transparent #7957d5 #7957d5 !important;
}
.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-link.is-outlined[disabled], fieldset[disabled] .button.is-link.is-outlined {
  background-color: transparent;
  border-color: #7957d5;
  box-shadow: none;
  color: #7957d5;
}
.button.is-link.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #7957d5;
}
.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #7957d5 #7957d5 !important;
}
.button.is-link.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-link.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-link.is-light {
  background-color: #f2effb;
  color: #552fbc;
}
.button.is-link.is-light:hover, .button.is-link.is-light.is-hovered {
  background-color: #eae4f8;
  border-color: transparent;
  color: #552fbc;
}
.button.is-link.is-light:active, .button.is-link.is-light.is-active {
  background-color: #e2daf6;
  border-color: transparent;
  color: #552fbc;
}
.button.is-info {
  background-color: #167df0;
  border-color: transparent;
  color: #fff;
}
.button.is-info:hover, .button.is-info.is-hovered {
  background-color: #0f77ea;
  border-color: transparent;
  color: #fff;
}
.button.is-info:focus, .button.is-info.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(22, 125, 240, 0.25);
}
.button.is-info:active, .button.is-info.is-active {
  background-color: #0e71de;
  border-color: transparent;
  color: #fff;
}
.button.is-info[disabled], fieldset[disabled] .button.is-info {
  background-color: #167df0;
  border-color: transparent;
  box-shadow: none;
}
.button.is-info.is-inverted {
  background-color: #fff;
  color: #167df0;
}
.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-info.is-inverted[disabled], fieldset[disabled] .button.is-info.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #167df0;
}
.button.is-info.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-info.is-outlined {
  background-color: transparent;
  border-color: #167df0;
  color: #167df0;
}
.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {
  background-color: #167df0;
  border-color: #167df0;
  color: #fff;
}
.button.is-info.is-outlined.is-loading::after {
  border-color: transparent transparent #167df0 #167df0 !important;
}
.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-info.is-outlined[disabled], fieldset[disabled] .button.is-info.is-outlined {
  background-color: transparent;
  border-color: #167df0;
  box-shadow: none;
  color: #167df0;
}
.button.is-info.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #167df0;
}
.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #167df0 #167df0 !important;
}
.button.is-info.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-info.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-info.is-light {
  background-color: #ecf4fe;
  color: #0d68ce;
}
.button.is-info.is-light:hover, .button.is-info.is-light.is-hovered {
  background-color: #e0eefd;
  border-color: transparent;
  color: #0d68ce;
}
.button.is-info.is-light:active, .button.is-info.is-light.is-active {
  background-color: #d4e7fc;
  border-color: transparent;
  color: #0d68ce;
}
.button.is-success {
  background-color: #48c774;
  border-color: transparent;
  color: #fff;
}
.button.is-success:hover, .button.is-success.is-hovered {
  background-color: #3ec46d;
  border-color: transparent;
  color: #fff;
}
.button.is-success:focus, .button.is-success.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);
}
.button.is-success:active, .button.is-success.is-active {
  background-color: #3abb67;
  border-color: transparent;
  color: #fff;
}
.button.is-success[disabled], fieldset[disabled] .button.is-success {
  background-color: #48c774;
  border-color: transparent;
  box-shadow: none;
}
.button.is-success.is-inverted {
  background-color: #fff;
  color: #48c774;
}
.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-success.is-inverted[disabled], fieldset[disabled] .button.is-success.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #48c774;
}
.button.is-success.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-success.is-outlined {
  background-color: transparent;
  border-color: #48c774;
  color: #48c774;
}
.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {
  background-color: #48c774;
  border-color: #48c774;
  color: #fff;
}
.button.is-success.is-outlined.is-loading::after {
  border-color: transparent transparent #48c774 #48c774 !important;
}
.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-success.is-outlined[disabled], fieldset[disabled] .button.is-success.is-outlined {
  background-color: transparent;
  border-color: #48c774;
  box-shadow: none;
  color: #48c774;
}
.button.is-success.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #48c774;
}
.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #48c774 #48c774 !important;
}
.button.is-success.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-success.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-success.is-light {
  background-color: #effaf3;
  color: #257942;
}
.button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {
  background-color: #e6f7ec;
  border-color: transparent;
  color: #257942;
}
.button.is-success.is-light:active, .button.is-success.is-light.is-active {
  background-color: #dcf4e4;
  border-color: transparent;
  color: #257942;
}
.button.is-warning {
  background-color: #ffdd57;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning:hover, .button.is-warning.is-hovered {
  background-color: #ffdb4a;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning:focus, .button.is-warning.is-focused {
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);
}
.button.is-warning:active, .button.is-warning.is-active {
  background-color: #ffd83d;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning[disabled], fieldset[disabled] .button.is-warning {
  background-color: #ffdd57;
  border-color: transparent;
  box-shadow: none;
}
.button.is-warning.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffdd57;
}
.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {
  background-color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-inverted[disabled], fieldset[disabled] .button.is-warning.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: transparent;
  box-shadow: none;
  color: #ffdd57;
}
.button.is-warning.is-loading::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-warning.is-outlined {
  background-color: transparent;
  border-color: #ffdd57;
  color: #ffdd57;
}
.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {
  background-color: #ffdd57;
  border-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-outlined.is-loading::after {
  border-color: transparent transparent #ffdd57 #ffdd57 !important;
}
.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-warning.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-outlined {
  background-color: transparent;
  border-color: #ffdd57;
  box-shadow: none;
  color: #ffdd57;
}
.button.is-warning.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffdd57;
}
.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #ffdd57 #ffdd57 !important;
}
.button.is-warning.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-light {
  background-color: #fffbeb;
  color: #947600;
}
.button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {
  background-color: #fff8de;
  border-color: transparent;
  color: #947600;
}
.button.is-warning.is-light:active, .button.is-warning.is-light.is-active {
  background-color: #fff6d1;
  border-color: transparent;
  color: #947600;
}
.button.is-danger {
  background-color: #f14668;
  border-color: transparent;
  color: #fff;
}
.button.is-danger:hover, .button.is-danger.is-hovered {
  background-color: #f03a5f;
  border-color: transparent;
  color: #fff;
}
.button.is-danger:focus, .button.is-danger.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);
}
.button.is-danger:active, .button.is-danger.is-active {
  background-color: #ef2e55;
  border-color: transparent;
  color: #fff;
}
.button.is-danger[disabled], fieldset[disabled] .button.is-danger {
  background-color: #f14668;
  border-color: transparent;
  box-shadow: none;
}
.button.is-danger.is-inverted {
  background-color: #fff;
  color: #f14668;
}
.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-danger.is-inverted[disabled], fieldset[disabled] .button.is-danger.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #f14668;
}
.button.is-danger.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-danger.is-outlined {
  background-color: transparent;
  border-color: #f14668;
  color: #f14668;
}
.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {
  background-color: #f14668;
  border-color: #f14668;
  color: #fff;
}
.button.is-danger.is-outlined.is-loading::after {
  border-color: transparent transparent #f14668 #f14668 !important;
}
.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-danger.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-outlined {
  background-color: transparent;
  border-color: #f14668;
  box-shadow: none;
  color: #f14668;
}
.button.is-danger.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #f14668;
}
.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #f14668 #f14668 !important;
}
.button.is-danger.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-danger.is-light {
  background-color: #feecf0;
  color: #cc0f35;
}
.button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {
  background-color: #fde0e6;
  border-color: transparent;
  color: #cc0f35;
}
.button.is-danger.is-light:active, .button.is-danger.is-light.is-active {
  background-color: #fcd4dc;
  border-color: transparent;
  color: #cc0f35;
}
.button.is-small {
  font-size: 0.75rem;
}
.button.is-small:not(.is-rounded) {
  border-radius: 2px;
}
.button.is-normal {
  font-size: 1rem;
}
.button.is-medium {
  font-size: 1.25rem;
}
.button.is-large {
  font-size: 1.5rem;
}
.button[disabled], fieldset[disabled] .button {
  background-color: white;
  border-color: #dbdbdb;
  box-shadow: none;
  opacity: 0.5;
}
.button.is-fullwidth {
  display: flex;
  width: 100%;
}
.button.is-loading {
  color: transparent !important;
  pointer-events: none;
}
.button.is-loading::after {
  position: absolute;
  left: calc(50% - (1em / 2));
  top: calc(50% - (1em / 2));
  position: absolute !important;
}
.button.is-static {
  background-color: whitesmoke;
  border-color: #dbdbdb;
  color: #7a7a7a;
  box-shadow: none;
  pointer-events: none;
}
.button.is-rounded {
  border-radius: 290486px;
  padding-left: calc(1em + 0.25em);
  padding-right: calc(1em + 0.25em);
}

.buttons {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.buttons .button {
  margin-bottom: 0.5rem;
}
.buttons .button:not(:last-child):not(.is-fullwidth) {
  margin-right: 0.5rem;
}
.buttons:last-child {
  margin-bottom: -0.5rem;
}
.buttons:not(:last-child) {
  margin-bottom: 1rem;
}
.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {
  font-size: 0.75rem;
}
.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {
  border-radius: 2px;
}
.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {
  font-size: 1.25rem;
}
.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {
  font-size: 1.5rem;
}
.buttons.has-addons .button:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.buttons.has-addons .button:not(:last-child) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  margin-right: -1px;
}
.buttons.has-addons .button:last-child {
  margin-right: 0;
}
.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {
  z-index: 2;
}
.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {
  z-index: 3;
}
.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {
  z-index: 4;
}
.buttons.has-addons .button.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.buttons.is-centered {
  justify-content: center;
}
.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.buttons.is-right {
  justify-content: flex-end;
}
.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
}
.container.is-fluid {
  max-width: none !important;
  padding-left: 32px;
  padding-right: 32px;
  width: 100%;
}
@media screen and (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}
@media screen and (max-width: 1215px) {
  .container.is-widescreen:not(.is-max-desktop) {
    max-width: 1152px;
  }
}
@media screen and (max-width: 1407px) {
  .container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen) {
    max-width: 1344px;
  }
}
@media screen and (min-width: 1216px) {
  .container:not(.is-max-desktop) {
    max-width: 1152px;
  }
}
@media screen and (min-width: 1408px) {
  .container:not(.is-max-desktop):not(.is-max-widescreen) {
    max-width: 1344px;
  }
}

.content li + li {
  margin-top: 0.25em;
}
.content p:not(:last-child),
.content dl:not(:last-child),
.content ol:not(:last-child),
.content ul:not(:last-child),
.content blockquote:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  margin-bottom: 1em;
}
.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  color: #363636;
  font-weight: 600;
  line-height: 1.125;
}
.content h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}
.content h1:not(:first-child) {
  margin-top: 1em;
}
.content h2 {
  font-size: 1.75em;
  margin-bottom: 0.5714em;
}
.content h2:not(:first-child) {
  margin-top: 1.1428em;
}
.content h3 {
  font-size: 1.5em;
  margin-bottom: 0.6666em;
}
.content h3:not(:first-child) {
  margin-top: 1.3333em;
}
.content h4 {
  font-size: 1.25em;
  margin-bottom: 0.8em;
}
.content h5 {
  font-size: 1.125em;
  margin-bottom: 0.8888em;
}
.content h6 {
  font-size: 1em;
  margin-bottom: 1em;
}
.content blockquote {
  background-color: whitesmoke;
  border-left: 5px solid #dbdbdb;
  padding: 1.25em 1.5em;
}
.content ol {
  list-style-position: outside;
  margin-left: 2em;
  margin-top: 1em;
}
.content ol:not([type]) {
  list-style-type: decimal;
}
.content ol:not([type]).is-lower-alpha {
  list-style-type: lower-alpha;
}
.content ol:not([type]).is-lower-roman {
  list-style-type: lower-roman;
}
.content ol:not([type]).is-upper-alpha {
  list-style-type: upper-alpha;
}
.content ol:not([type]).is-upper-roman {
  list-style-type: upper-roman;
}
.content ul {
  list-style: disc outside;
  margin-left: 2em;
  margin-top: 1em;
}
.content ul ul {
  list-style-type: circle;
  margin-top: 0.5em;
}
.content ul ul ul {
  list-style-type: square;
}
.content dd {
  margin-left: 2em;
}
.content figure {
  margin-left: 2em;
  margin-right: 2em;
  text-align: center;
}
.content figure:not(:first-child) {
  margin-top: 2em;
}
.content figure:not(:last-child) {
  margin-bottom: 2em;
}
.content figure img {
  display: inline-block;
}
.content figure figcaption {
  font-style: italic;
}
.content pre {
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  padding: 1.25em 1.5em;
  white-space: pre;
  word-wrap: normal;
}
.content sup,
.content sub {
  font-size: 75%;
}
.content table {
  width: 100%;
}
.content table td,
.content table th {
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  padding: 0.5em 0.75em;
  vertical-align: top;
}
.content table th {
  color: #363636;
}
.content table th:not([align]) {
  text-align: inherit;
}
.content table thead td,
.content table thead th {
  border-width: 0 0 2px;
  color: #363636;
}
.content table tfoot td,
.content table tfoot th {
  border-width: 2px 0 0;
  color: #363636;
}
.content table tbody tr:last-child td,
.content table tbody tr:last-child th {
  border-bottom-width: 0;
}
.content .tabs li + li {
  margin-top: 0;
}
.content.is-small {
  font-size: 0.75rem;
}
.content.is-medium {
  font-size: 1.25rem;
}
.content.is-large {
  font-size: 1.5rem;
}

.icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
}
.icon.is-small {
  height: 1rem;
  width: 1rem;
}
.icon.is-medium {
  height: 2rem;
  width: 2rem;
}
.icon.is-large {
  height: 3rem;
  width: 3rem;
}

.icon-text {
  align-items: flex-start;
  color: inherit;
  display: inline-flex;
  flex-wrap: wrap;
  line-height: 1.5rem;
  vertical-align: top;
}
.icon-text .icon {
  flex-grow: 0;
  flex-shrink: 0;
}
.icon-text .icon:not(:last-child) {
  margin-right: 0.25em;
}
.icon-text .icon:not(:first-child) {
  margin-left: 0.25em;
}

div.icon-text {
  display: flex;
}

.image {
  display: block;
  position: relative;
}
.image img {
  display: block;
  height: auto;
  width: 100%;
}
.image img.is-rounded {
  border-radius: 290486px;
}
.image.is-fullwidth {
  width: 100%;
}
.image.is-square img,
.image.is-square .has-ratio, .image.is-1by1 img,
.image.is-1by1 .has-ratio, .image.is-5by4 img,
.image.is-5by4 .has-ratio, .image.is-4by3 img,
.image.is-4by3 .has-ratio, .image.is-3by2 img,
.image.is-3by2 .has-ratio, .image.is-5by3 img,
.image.is-5by3 .has-ratio, .image.is-16by9 img,
.image.is-16by9 .has-ratio, .image.is-2by1 img,
.image.is-2by1 .has-ratio, .image.is-3by1 img,
.image.is-3by1 .has-ratio, .image.is-4by5 img,
.image.is-4by5 .has-ratio, .image.is-3by4 img,
.image.is-3by4 .has-ratio, .image.is-2by3 img,
.image.is-2by3 .has-ratio, .image.is-3by5 img,
.image.is-3by5 .has-ratio, .image.is-9by16 img,
.image.is-9by16 .has-ratio, .image.is-1by2 img,
.image.is-1by2 .has-ratio, .image.is-1by3 img,
.image.is-1by3 .has-ratio {
  height: 100%;
  width: 100%;
}
.image.is-square, .image.is-1by1 {
  padding-top: 100%;
}
.image.is-5by4 {
  padding-top: 80%;
}
.image.is-4by3 {
  padding-top: 75%;
}
.image.is-3by2 {
  padding-top: 66.6666%;
}
.image.is-5by3 {
  padding-top: 60%;
}
.image.is-16by9 {
  padding-top: 56.25%;
}
.image.is-2by1 {
  padding-top: 50%;
}
.image.is-3by1 {
  padding-top: 33.3333%;
}
.image.is-4by5 {
  padding-top: 125%;
}
.image.is-3by4 {
  padding-top: 133.3333%;
}
.image.is-2by3 {
  padding-top: 150%;
}
.image.is-3by5 {
  padding-top: 166.6666%;
}
.image.is-9by16 {
  padding-top: 177.7777%;
}
.image.is-1by2 {
  padding-top: 200%;
}
.image.is-1by3 {
  padding-top: 300%;
}
.image.is-16x16 {
  height: 16px;
  width: 16px;
}
.image.is-24x24 {
  height: 24px;
  width: 24px;
}
.image.is-32x32 {
  height: 32px;
  width: 32px;
}
.image.is-48x48 {
  height: 48px;
  width: 48px;
}
.image.is-64x64 {
  height: 64px;
  width: 64px;
}
.image.is-96x96 {
  height: 96px;
  width: 96px;
}
.image.is-128x128 {
  height: 128px;
  width: 128px;
}

.notification {
  background-color: whitesmoke;
  border-radius: 4px;
  position: relative;
  padding: 1.25rem 2.5rem 1.25rem 1.5rem;
}
.notification a:not(.button):not(.dropdown-item) {
  color: currentColor;
  text-decoration: underline;
}
.notification strong {
  color: currentColor;
}
.notification code,
.notification pre {
  background: white;
}
.notification pre code {
  background: transparent;
}
.notification > .delete {
  right: 0.5rem;
  position: absolute;
  top: 0.5rem;
}
.notification .title,
.notification .subtitle,
.notification .content {
  color: currentColor;
}
.notification.is-white {
  background-color: white;
  color: #0a0a0a;
}
.notification.is-black {
  background-color: #0a0a0a;
  color: white;
}
.notification.is-light {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.notification.is-dark {
  background-color: #363636;
  color: #fff;
}
.notification.is-primary {
  background-color: #7957d5;
  color: #fff;
}
.notification.is-primary.is-light {
  background-color: #f2effb;
  color: #552fbc;
}
.notification.is-link {
  background-color: #7957d5;
  color: #fff;
}
.notification.is-link.is-light {
  background-color: #f2effb;
  color: #552fbc;
}
.notification.is-info {
  background-color: #167df0;
  color: #fff;
}
.notification.is-info.is-light {
  background-color: #ecf4fe;
  color: #0d68ce;
}
.notification.is-success {
  background-color: #48c774;
  color: #fff;
}
.notification.is-success.is-light {
  background-color: #effaf3;
  color: #257942;
}
.notification.is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}
.notification.is-warning.is-light {
  background-color: #fffbeb;
  color: #947600;
}
.notification.is-danger {
  background-color: #f14668;
  color: #fff;
}
.notification.is-danger.is-light {
  background-color: #feecf0;
  color: #cc0f35;
}

.progress, .progress-wrapper.is-not-native {
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 290486px;
  display: block;
  height: 1rem;
  overflow: hidden;
  padding: 0;
  width: 100%;
}
.progress::-webkit-progress-bar, .progress-wrapper.is-not-native::-webkit-progress-bar {
  background-color: #ededed;
}
.progress::-webkit-progress-value, .progress-wrapper.is-not-native::-webkit-progress-value {
  background-color: #4a4a4a;
}
.progress::-moz-progress-bar, .progress-wrapper.is-not-native::-moz-progress-bar {
  background-color: #4a4a4a;
}
.progress::-ms-fill, .progress-wrapper.is-not-native::-ms-fill {
  background-color: #4a4a4a;
  border: none;
}
.progress.is-white::-webkit-progress-value, .is-white.progress-wrapper.is-not-native::-webkit-progress-value {
  background-color: white;
}
.progress.is-white::-moz-progress-bar, .is-white.progress-wrapper.is-not-native::-moz-progress-bar {
  background-color: white;
}
.progress.is-white::-ms-fill, .is-white.progress-wrapper.is-not-native::-ms-fill {
  background-color: white;
}
.progress.is-white:indeterminate, .is-white.progress-wrapper.is-not-native:indeterminate {
  background-image: linear-gradient(to right, white 30%, #ededed 30%);
}
.progress.is-black::-webkit-progress-value, .is-black.progress-wrapper.is-not-native::-webkit-progress-value {
  background-color: #0a0a0a;
}
.progress.is-black::-moz-progress-bar, .is-black.progress-wrapper.is-not-native::-moz-progress-bar {
  background-color: #0a0a0a;
}
.progress.is-black::-ms-fill, .is-black.progress-wrapper.is-not-native::-ms-fill {
  background-color: #0a0a0a;
}
.progress.is-black:indeterminate, .is-black.progress-wrapper.is-not-native:indeterminate {
  background-image: linear-gradient(to right, #0a0a0a 30%, #ededed 30%);
}
.progress.is-light::-webkit-progress-value, .is-light.progress-wrapper.is-not-native::-webkit-progress-value {
  background-color: whitesmoke;
}
.progress.is-light::-moz-progress-bar, .is-light.progress-wrapper.is-not-native::-moz-progress-bar {
  background-color: whitesmoke;
}
.progress.is-light::-ms-fill, .is-light.progress-wrapper.is-not-native::-ms-fill {
  background-color: whitesmoke;
}
.progress.is-light:indeterminate, .is-light.progress-wrapper.is-not-native:indeterminate {
  background-image: linear-gradient(to right, whitesmoke 30%, #ededed 30%);
}
.progress.is-dark::-webkit-progress-value, .is-dark.progress-wrapper.is-not-native::-webkit-progress-value {
  background-color: #363636;
}
.progress.is-dark::-moz-progress-bar, .is-dark.progress-wrapper.is-not-native::-moz-progress-bar {
  background-color: #363636;
}
.progress.is-dark::-ms-fill, .is-dark.progress-wrapper.is-not-native::-ms-fill {
  background-color: #363636;
}
.progress.is-dark:indeterminate, .is-dark.progress-wrapper.is-not-native:indeterminate {
  background-image: linear-gradient(to right, #363636 30%, #ededed 30%);
}
.progress.is-primary::-webkit-progress-value, .is-primary.progress-wrapper.is-not-native::-webkit-progress-value {
  background-color: #7957d5;
}
.progress.is-primary::-moz-progress-bar, .is-primary.progress-wrapper.is-not-native::-moz-progress-bar {
  background-color: #7957d5;
}
.progress.is-primary::-ms-fill, .is-primary.progress-wrapper.is-not-native::-ms-fill {
  background-color: #7957d5;
}
.progress.is-primary:indeterminate, .is-primary.progress-wrapper.is-not-native:indeterminate {
  background-image: linear-gradient(to right, #7957d5 30%, #ededed 30%);
}
.progress.is-link::-webkit-progress-value, .is-link.progress-wrapper.is-not-native::-webkit-progress-value {
  background-color: #7957d5;
}
.progress.is-link::-moz-progress-bar, .is-link.progress-wrapper.is-not-native::-moz-progress-bar {
  background-color: #7957d5;
}
.progress.is-link::-ms-fill, .is-link.progress-wrapper.is-not-native::-ms-fill {
  background-color: #7957d5;
}
.progress.is-link:indeterminate, .is-link.progress-wrapper.is-not-native:indeterminate {
  background-image: linear-gradient(to right, #7957d5 30%, #ededed 30%);
}
.progress.is-info::-webkit-progress-value, .is-info.progress-wrapper.is-not-native::-webkit-progress-value {
  background-color: #167df0;
}
.progress.is-info::-moz-progress-bar, .is-info.progress-wrapper.is-not-native::-moz-progress-bar {
  background-color: #167df0;
}
.progress.is-info::-ms-fill, .is-info.progress-wrapper.is-not-native::-ms-fill {
  background-color: #167df0;
}
.progress.is-info:indeterminate, .is-info.progress-wrapper.is-not-native:indeterminate {
  background-image: linear-gradient(to right, #167df0 30%, #ededed 30%);
}
.progress.is-success::-webkit-progress-value, .is-success.progress-wrapper.is-not-native::-webkit-progress-value {
  background-color: #48c774;
}
.progress.is-success::-moz-progress-bar, .is-success.progress-wrapper.is-not-native::-moz-progress-bar {
  background-color: #48c774;
}
.progress.is-success::-ms-fill, .is-success.progress-wrapper.is-not-native::-ms-fill {
  background-color: #48c774;
}
.progress.is-success:indeterminate, .is-success.progress-wrapper.is-not-native:indeterminate {
  background-image: linear-gradient(to right, #48c774 30%, #ededed 30%);
}
.progress.is-warning::-webkit-progress-value, .is-warning.progress-wrapper.is-not-native::-webkit-progress-value {
  background-color: #ffdd57;
}
.progress.is-warning::-moz-progress-bar, .is-warning.progress-wrapper.is-not-native::-moz-progress-bar {
  background-color: #ffdd57;
}
.progress.is-warning::-ms-fill, .is-warning.progress-wrapper.is-not-native::-ms-fill {
  background-color: #ffdd57;
}
.progress.is-warning:indeterminate, .is-warning.progress-wrapper.is-not-native:indeterminate {
  background-image: linear-gradient(to right, #ffdd57 30%, #ededed 30%);
}
.progress.is-danger::-webkit-progress-value, .is-danger.progress-wrapper.is-not-native::-webkit-progress-value {
  background-color: #f14668;
}
.progress.is-danger::-moz-progress-bar, .is-danger.progress-wrapper.is-not-native::-moz-progress-bar {
  background-color: #f14668;
}
.progress.is-danger::-ms-fill, .is-danger.progress-wrapper.is-not-native::-ms-fill {
  background-color: #f14668;
}
.progress.is-danger:indeterminate, .is-danger.progress-wrapper.is-not-native:indeterminate {
  background-image: linear-gradient(to right, #f14668 30%, #ededed 30%);
}
.progress:indeterminate, .progress-wrapper.is-not-native:indeterminate {
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: moveIndeterminate;
  animation-timing-function: linear;
  background-color: #ededed;
  background-image: linear-gradient(to right, #4a4a4a 30%, #ededed 30%);
  background-position: top left;
  background-repeat: no-repeat;
  background-size: 150% 150%;
}
.progress:indeterminate::-webkit-progress-bar, .progress-wrapper.is-not-native:indeterminate::-webkit-progress-bar {
  background-color: transparent;
}
.progress:indeterminate::-moz-progress-bar, .progress-wrapper.is-not-native:indeterminate::-moz-progress-bar {
  background-color: transparent;
}
.progress:indeterminate::-ms-fill, .progress-wrapper.is-not-native:indeterminate::-ms-fill {
  animation-name: none;
}
.progress.is-small, .is-small.progress-wrapper.is-not-native {
  height: 0.75rem;
}
.progress.is-medium, .is-medium.progress-wrapper.is-not-native {
  height: 1.25rem;
}
.progress.is-large, .is-large.progress-wrapper.is-not-native {
  height: 1.5rem;
}

@keyframes moveIndeterminate {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}
.table {
  background-color: white;
  color: #363636;
}
.table td,
.table th {
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  padding: 0.5em 0.75em;
  vertical-align: top;
}
.table td.is-white,
.table th.is-white {
  background-color: white;
  border-color: white;
  color: #0a0a0a;
}
.table td.is-black,
.table th.is-black {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: white;
}
.table td.is-light,
.table th.is-light {
  background-color: whitesmoke;
  border-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.table td.is-dark,
.table th.is-dark {
  background-color: #363636;
  border-color: #363636;
  color: #fff;
}
.table td.is-primary,
.table th.is-primary {
  background-color: #7957d5;
  border-color: #7957d5;
  color: #fff;
}
.table td.is-link,
.table th.is-link {
  background-color: #7957d5;
  border-color: #7957d5;
  color: #fff;
}
.table td.is-info,
.table th.is-info {
  background-color: #167df0;
  border-color: #167df0;
  color: #fff;
}
.table td.is-success,
.table th.is-success {
  background-color: #48c774;
  border-color: #48c774;
  color: #fff;
}
.table td.is-warning,
.table th.is-warning {
  background-color: #ffdd57;
  border-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}
.table td.is-danger,
.table th.is-danger {
  background-color: #f14668;
  border-color: #f14668;
  color: #fff;
}
.table td.is-narrow,
.table th.is-narrow {
  white-space: nowrap;
  width: 1%;
}
.table td.is-selected,
.table th.is-selected {
  background-color: #7957d5;
  color: #fff;
}
.table td.is-selected a,
.table td.is-selected strong,
.table th.is-selected a,
.table th.is-selected strong {
  color: currentColor;
}
.table td.is-vcentered,
.table th.is-vcentered {
  vertical-align: middle;
}
.table th {
  color: #363636;
}
.table th:not([align]) {
  text-align: inherit;
}
.table tr.is-selected {
  background-color: #7957d5;
  color: #fff;
}
.table tr.is-selected a,
.table tr.is-selected strong {
  color: currentColor;
}
.table tr.is-selected td,
.table tr.is-selected th {
  border-color: #fff;
  color: currentColor;
}
.table thead {
  background-color: transparent;
}
.table thead td,
.table thead th {
  border-width: 0 0 2px;
  color: #363636;
}
.table tfoot {
  background-color: transparent;
}
.table tfoot td,
.table tfoot th {
  border-width: 2px 0 0;
  color: #363636;
}
.table tbody {
  background-color: transparent;
}
.table tbody tr:last-child td,
.table tbody tr:last-child th {
  border-bottom-width: 0;
}
.table.is-bordered td,
.table.is-bordered th {
  border-width: 1px;
}
.table.is-bordered tr:last-child td,
.table.is-bordered tr:last-child th {
  border-bottom-width: 1px;
}
.table.is-fullwidth {
  width: 100%;
}
.table.is-hoverable tbody tr:not(.is-selected):hover {
  background-color: #fafafa;
}
.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {
  background-color: #fafafa;
}
.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {
  background-color: whitesmoke;
}
.table.is-narrow td,
.table.is-narrow th {
  padding: 0.25em 0.5em;
}
.table.is-striped tbody tr:not(.is-selected):nth-child(even) {
  background-color: #fafafa;
}

.table-container {
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  overflow-y: hidden;
  max-width: 100%;
}

.tags {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.tags .tag {
  margin-bottom: 0.5rem;
}
.tags .tag:not(:last-child) {
  margin-right: 0.5rem;
}
.tags:last-child {
  margin-bottom: -0.5rem;
}
.tags:not(:last-child) {
  margin-bottom: 1rem;
}
.tags.are-medium .tag:not(.is-normal):not(.is-large) {
  font-size: 1rem;
}
.tags.are-large .tag:not(.is-normal):not(.is-medium) {
  font-size: 1.25rem;
}
.tags.is-centered {
  justify-content: center;
}
.tags.is-centered .tag {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
}
.tags.is-right {
  justify-content: flex-end;
}
.tags.is-right .tag:not(:first-child) {
  margin-left: 0.5rem;
}
.tags.is-right .tag:not(:last-child) {
  margin-right: 0;
}
.tags.has-addons .tag {
  margin-right: 0;
}
.tags.has-addons .tag:not(:first-child) {
  margin-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.tags.has-addons .tag:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.tag:not(body) {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 4px;
  color: #4a4a4a;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
}
.tag:not(body) .delete {
  margin-left: 0.25rem;
  margin-right: -0.375rem;
}
.tag:not(body).is-white {
  background-color: white;
  color: #0a0a0a;
}
.tag:not(body).is-black {
  background-color: #0a0a0a;
  color: white;
}
.tag:not(body).is-light {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.tag:not(body).is-dark {
  background-color: #363636;
  color: #fff;
}
.tag:not(body).is-primary {
  background-color: #7957d5;
  color: #fff;
}
.tag:not(body).is-primary.is-light {
  background-color: #f2effb;
  color: #552fbc;
}
.tag:not(body).is-link {
  background-color: #7957d5;
  color: #fff;
}
.tag:not(body).is-link.is-light {
  background-color: #f2effb;
  color: #552fbc;
}
.tag:not(body).is-info {
  background-color: #167df0;
  color: #fff;
}
.tag:not(body).is-info.is-light {
  background-color: #ecf4fe;
  color: #0d68ce;
}
.tag:not(body).is-success {
  background-color: #48c774;
  color: #fff;
}
.tag:not(body).is-success.is-light {
  background-color: #effaf3;
  color: #257942;
}
.tag:not(body).is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}
.tag:not(body).is-warning.is-light {
  background-color: #fffbeb;
  color: #947600;
}
.tag:not(body).is-danger {
  background-color: #f14668;
  color: #fff;
}
.tag:not(body).is-danger.is-light {
  background-color: #feecf0;
  color: #cc0f35;
}
.tag:not(body).is-normal {
  font-size: 0.75rem;
}
.tag:not(body).is-medium {
  font-size: 1rem;
}
.tag:not(body).is-large {
  font-size: 1.25rem;
}
.tag:not(body) .icon:first-child:not(:last-child) {
  margin-left: -0.375em;
  margin-right: 0.1875em;
}
.tag:not(body) .icon:last-child:not(:first-child) {
  margin-left: 0.1875em;
  margin-right: -0.375em;
}
.tag:not(body) .icon:first-child:last-child {
  margin-left: -0.375em;
  margin-right: -0.375em;
}
.tag:not(body).is-delete {
  margin-left: 1px;
  padding: 0;
  position: relative;
  width: 2em;
}
.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {
  background-color: currentColor;
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform-origin: center center;
}
.tag:not(body).is-delete::before {
  height: 1px;
  width: 50%;
}
.tag:not(body).is-delete::after {
  height: 50%;
  width: 1px;
}
.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {
  background-color: #e8e8e8;
}
.tag:not(body).is-delete:active {
  background-color: #dbdbdb;
}
.tag:not(body).is-rounded {
  border-radius: 290486px;
}

a.tag:hover {
  text-decoration: underline;
}

.title,
.subtitle {
  word-break: break-word;
}
.title em,
.title span,
.subtitle em,
.subtitle span {
  font-weight: inherit;
}
.title sub,
.subtitle sub {
  font-size: 0.75em;
}
.title sup,
.subtitle sup {
  font-size: 0.75em;
}
.title .tag,
.subtitle .tag {
  vertical-align: middle;
}

.title {
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
}
.title strong {
  color: inherit;
  font-weight: inherit;
}
.title + .highlight {
  margin-top: -0.75rem;
}
.title:not(.is-spaced) + .subtitle {
  margin-top: -1.25rem;
}
.title.is-1 {
  font-size: 3rem;
}
.title.is-2 {
  font-size: 2.5rem;
}
.title.is-3 {
  font-size: 2rem;
}
.title.is-4 {
  font-size: 1.5rem;
}
.title.is-5 {
  font-size: 1.25rem;
}
.title.is-6 {
  font-size: 1rem;
}
.title.is-7 {
  font-size: 0.75rem;
}

.subtitle {
  color: #4a4a4a;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
}
.subtitle strong {
  color: #363636;
  font-weight: 600;
}
.subtitle:not(.is-spaced) + .title {
  margin-top: -1.25rem;
}
.subtitle.is-1 {
  font-size: 3rem;
}
.subtitle.is-2 {
  font-size: 2.5rem;
}
.subtitle.is-3 {
  font-size: 2rem;
}
.subtitle.is-4 {
  font-size: 1.5rem;
}
.subtitle.is-5 {
  font-size: 1.25rem;
}
.subtitle.is-6 {
  font-size: 1rem;
}
.subtitle.is-7 {
  font-size: 0.75rem;
}

.heading {
  display: block;
  font-size: 11px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.highlight {
  font-weight: 400;
  max-width: 100%;
  overflow: hidden;
  padding: 0;
}
.highlight pre {
  overflow: auto;
  max-width: 100%;
}

.number {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 290486px;
  display: inline-flex;
  font-size: 1.25rem;
  height: 2em;
  justify-content: center;
  margin-right: 1.5rem;
  min-width: 2.5em;
  padding: 0.25rem 0.5rem;
  text-align: center;
  vertical-align: top;
}

/* Bulma Form */
.select select, .taginput .taginput-container.is-focusable, .textarea, .input {
  background-color: white;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
}
.select select::-moz-placeholder, .taginput .taginput-container.is-focusable::-moz-placeholder, .textarea::-moz-placeholder, .input::-moz-placeholder {
  color: rgba(54, 54, 54, 0.3);
}
.select select::-webkit-input-placeholder, .taginput .taginput-container.is-focusable::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .input::-webkit-input-placeholder {
  color: rgba(54, 54, 54, 0.3);
}
.select select:-moz-placeholder, .taginput .taginput-container.is-focusable:-moz-placeholder, .textarea:-moz-placeholder, .input:-moz-placeholder {
  color: rgba(54, 54, 54, 0.3);
}
.select select:-ms-input-placeholder, .taginput .taginput-container.is-focusable:-ms-input-placeholder, .textarea:-ms-input-placeholder, .input:-ms-input-placeholder {
  color: rgba(54, 54, 54, 0.3);
}
.select select:hover, .taginput .taginput-container.is-focusable:hover, .textarea:hover, .input:hover, .select select.is-hovered, .taginput .is-hovered.taginput-container.is-focusable, .is-hovered.textarea, .is-hovered.input {
  border-color: #b5b5b5;
}
.select select:focus, .taginput .taginput-container.is-focusable:focus, .textarea:focus, .input:focus, .select select.is-focused, .taginput .is-focused.taginput-container.is-focusable, .is-focused.textarea, .is-focused.input, .select select:active, .taginput .taginput-container.is-focusable:active, .textarea:active, .input:active, .select select.is-active, .taginput .is-active.taginput-container.is-focusable, .is-active.textarea, .is-active.input {
  border-color: #7957d5;
  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
}
.select select[disabled], .taginput [disabled].taginput-container.is-focusable, [disabled].textarea, [disabled].input, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .taginput .taginput-container.is-focusable, .taginput fieldset[disabled] .taginput-container.is-focusable, fieldset[disabled] .textarea, fieldset[disabled] .input {
  background-color: whitesmoke;
  border-color: whitesmoke;
  box-shadow: none;
  color: #7a7a7a;
}
.select select[disabled]::-moz-placeholder, .taginput [disabled].taginput-container.is-focusable::-moz-placeholder, [disabled].textarea::-moz-placeholder, [disabled].input::-moz-placeholder, fieldset[disabled] .select select::-moz-placeholder, .select fieldset[disabled] select::-moz-placeholder, fieldset[disabled] .taginput .taginput-container.is-focusable::-moz-placeholder, .taginput fieldset[disabled] .taginput-container.is-focusable::-moz-placeholder, fieldset[disabled] .textarea::-moz-placeholder, fieldset[disabled] .input::-moz-placeholder {
  color: rgba(122, 122, 122, 0.3);
}
.select select[disabled]::-webkit-input-placeholder, .taginput [disabled].taginput-container.is-focusable::-webkit-input-placeholder, [disabled].textarea::-webkit-input-placeholder, [disabled].input::-webkit-input-placeholder, fieldset[disabled] .select select::-webkit-input-placeholder, .select fieldset[disabled] select::-webkit-input-placeholder, fieldset[disabled] .taginput .taginput-container.is-focusable::-webkit-input-placeholder, .taginput fieldset[disabled] .taginput-container.is-focusable::-webkit-input-placeholder, fieldset[disabled] .textarea::-webkit-input-placeholder, fieldset[disabled] .input::-webkit-input-placeholder {
  color: rgba(122, 122, 122, 0.3);
}
.select select[disabled]:-moz-placeholder, .taginput [disabled].taginput-container.is-focusable:-moz-placeholder, [disabled].textarea:-moz-placeholder, [disabled].input:-moz-placeholder, fieldset[disabled] .select select:-moz-placeholder, .select fieldset[disabled] select:-moz-placeholder, fieldset[disabled] .taginput .taginput-container.is-focusable:-moz-placeholder, .taginput fieldset[disabled] .taginput-container.is-focusable:-moz-placeholder, fieldset[disabled] .textarea:-moz-placeholder, fieldset[disabled] .input:-moz-placeholder {
  color: rgba(122, 122, 122, 0.3);
}
.select select[disabled]:-ms-input-placeholder, .taginput [disabled].taginput-container.is-focusable:-ms-input-placeholder, [disabled].textarea:-ms-input-placeholder, [disabled].input:-ms-input-placeholder, fieldset[disabled] .select select:-ms-input-placeholder, .select fieldset[disabled] select:-ms-input-placeholder, fieldset[disabled] .taginput .taginput-container.is-focusable:-ms-input-placeholder, .taginput fieldset[disabled] .taginput-container.is-focusable:-ms-input-placeholder, fieldset[disabled] .textarea:-ms-input-placeholder, fieldset[disabled] .input:-ms-input-placeholder {
  color: rgba(122, 122, 122, 0.3);
}

.taginput .taginput-container.is-focusable, .textarea, .input {
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  max-width: 100%;
  width: 100%;
}
.taginput [readonly].taginput-container.is-focusable, [readonly].textarea, [readonly].input {
  box-shadow: none;
}
.taginput .is-white.taginput-container.is-focusable, .is-white.textarea, .is-white.input {
  border-color: white;
}
.taginput .is-white.taginput-container.is-focusable:focus, .is-white.textarea:focus, .is-white.input:focus, .taginput .is-white.is-focused.taginput-container.is-focusable, .is-white.is-focused.textarea, .is-white.is-focused.input, .taginput .is-white.taginput-container.is-focusable:active, .is-white.textarea:active, .is-white.input:active, .taginput .is-white.is-active.taginput-container.is-focusable, .is-white.is-active.textarea, .is-white.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}
.taginput .is-black.taginput-container.is-focusable, .is-black.textarea, .is-black.input {
  border-color: #0a0a0a;
}
.taginput .is-black.taginput-container.is-focusable:focus, .is-black.textarea:focus, .is-black.input:focus, .taginput .is-black.is-focused.taginput-container.is-focusable, .is-black.is-focused.textarea, .is-black.is-focused.input, .taginput .is-black.taginput-container.is-focusable:active, .is-black.textarea:active, .is-black.input:active, .taginput .is-black.is-active.taginput-container.is-focusable, .is-black.is-active.textarea, .is-black.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
}
.taginput .is-light.taginput-container.is-focusable, .is-light.textarea, .is-light.input {
  border-color: whitesmoke;
}
.taginput .is-light.taginput-container.is-focusable:focus, .is-light.textarea:focus, .is-light.input:focus, .taginput .is-light.is-focused.taginput-container.is-focusable, .is-light.is-focused.textarea, .is-light.is-focused.input, .taginput .is-light.taginput-container.is-focusable:active, .is-light.textarea:active, .is-light.input:active, .taginput .is-light.is-active.taginput-container.is-focusable, .is-light.is-active.textarea, .is-light.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}
.taginput .is-dark.taginput-container.is-focusable, .is-dark.textarea, .is-dark.input {
  border-color: #363636;
}
.taginput .is-dark.taginput-container.is-focusable:focus, .is-dark.textarea:focus, .is-dark.input:focus, .taginput .is-dark.is-focused.taginput-container.is-focusable, .is-dark.is-focused.textarea, .is-dark.is-focused.input, .taginput .is-dark.taginput-container.is-focusable:active, .is-dark.textarea:active, .is-dark.input:active, .taginput .is-dark.is-active.taginput-container.is-focusable, .is-dark.is-active.textarea, .is-dark.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}
.taginput .is-primary.taginput-container.is-focusable, .is-primary.textarea, .is-primary.input {
  border-color: #7957d5;
}
.taginput .is-primary.taginput-container.is-focusable:focus, .is-primary.textarea:focus, .is-primary.input:focus, .taginput .is-primary.is-focused.taginput-container.is-focusable, .is-primary.is-focused.textarea, .is-primary.is-focused.input, .taginput .is-primary.taginput-container.is-focusable:active, .is-primary.textarea:active, .is-primary.input:active, .taginput .is-primary.is-active.taginput-container.is-focusable, .is-primary.is-active.textarea, .is-primary.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
}
.taginput .is-link.taginput-container.is-focusable, .is-link.textarea, .is-link.input {
  border-color: #7957d5;
}
.taginput .is-link.taginput-container.is-focusable:focus, .is-link.textarea:focus, .is-link.input:focus, .taginput .is-link.is-focused.taginput-container.is-focusable, .is-link.is-focused.textarea, .is-link.is-focused.input, .taginput .is-link.taginput-container.is-focusable:active, .is-link.textarea:active, .is-link.input:active, .taginput .is-link.is-active.taginput-container.is-focusable, .is-link.is-active.textarea, .is-link.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
}
.taginput .is-info.taginput-container.is-focusable, .is-info.textarea, .is-info.input {
  border-color: #167df0;
}
.taginput .is-info.taginput-container.is-focusable:focus, .is-info.textarea:focus, .is-info.input:focus, .taginput .is-info.is-focused.taginput-container.is-focusable, .is-info.is-focused.textarea, .is-info.is-focused.input, .taginput .is-info.taginput-container.is-focusable:active, .is-info.textarea:active, .is-info.input:active, .taginput .is-info.is-active.taginput-container.is-focusable, .is-info.is-active.textarea, .is-info.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(22, 125, 240, 0.25);
}
.taginput .is-success.taginput-container.is-focusable, .is-success.textarea, .is-success.input {
  border-color: #48c774;
}
.taginput .is-success.taginput-container.is-focusable:focus, .is-success.textarea:focus, .is-success.input:focus, .taginput .is-success.is-focused.taginput-container.is-focusable, .is-success.is-focused.textarea, .is-success.is-focused.input, .taginput .is-success.taginput-container.is-focusable:active, .is-success.textarea:active, .is-success.input:active, .taginput .is-success.is-active.taginput-container.is-focusable, .is-success.is-active.textarea, .is-success.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);
}
.taginput .is-warning.taginput-container.is-focusable, .is-warning.textarea, .is-warning.input {
  border-color: #ffdd57;
}
.taginput .is-warning.taginput-container.is-focusable:focus, .is-warning.textarea:focus, .is-warning.input:focus, .taginput .is-warning.is-focused.taginput-container.is-focusable, .is-warning.is-focused.textarea, .is-warning.is-focused.input, .taginput .is-warning.taginput-container.is-focusable:active, .is-warning.textarea:active, .is-warning.input:active, .taginput .is-warning.is-active.taginput-container.is-focusable, .is-warning.is-active.textarea, .is-warning.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);
}
.taginput .is-danger.taginput-container.is-focusable, .is-danger.textarea, .is-danger.input {
  border-color: #f14668;
}
.taginput .is-danger.taginput-container.is-focusable:focus, .is-danger.textarea:focus, .is-danger.input:focus, .taginput .is-danger.is-focused.taginput-container.is-focusable, .is-danger.is-focused.textarea, .is-danger.is-focused.input, .taginput .is-danger.taginput-container.is-focusable:active, .is-danger.textarea:active, .is-danger.input:active, .taginput .is-danger.is-active.taginput-container.is-focusable, .is-danger.is-active.textarea, .is-danger.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);
}
.taginput .is-small.taginput-container.is-focusable, .is-small.textarea, .is-small.input {
  border-radius: 2px;
  font-size: 0.75rem;
}
.taginput .is-medium.taginput-container.is-focusable, .is-medium.textarea, .is-medium.input {
  font-size: 1.25rem;
}
.taginput .is-large.taginput-container.is-focusable, .is-large.textarea, .is-large.input {
  font-size: 1.5rem;
}
.taginput .is-fullwidth.taginput-container.is-focusable, .is-fullwidth.textarea, .is-fullwidth.input {
  display: block;
  width: 100%;
}
.taginput .is-inline.taginput-container.is-focusable, .is-inline.textarea, .is-inline.input {
  display: inline;
  width: auto;
}

.input.is-rounded {
  border-radius: 290486px;
  padding-left: calc(calc(0.75em - 1px) + 0.375em);
  padding-right: calc(calc(0.75em - 1px) + 0.375em);
}
.input.is-static {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
}

.textarea {
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: calc(0.75em - 1px);
  resize: vertical;
}
.textarea:not([rows]) {
  max-height: 40em;
  min-height: 8em;
}
.textarea[rows] {
  height: initial;
}
.textarea.has-fixed-size {
  resize: none;
}

.radio, .checkbox {
  cursor: pointer;
  display: inline-block;
  line-height: 1.25;
  position: relative;
}
.radio input, .checkbox input {
  cursor: pointer;
}
.radio:hover, .checkbox:hover {
  color: #363636;
}
[disabled].radio, [disabled].checkbox, fieldset[disabled] .radio, fieldset[disabled] .checkbox,
.radio input[disabled],
.checkbox input[disabled] {
  color: #7a7a7a;
  cursor: not-allowed;
}

.radio + .radio {
  margin-left: 0.5em;
}

.select {
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;
}
.select:not(.is-multiple) {
  height: 2.5em;
}
.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #7957d5;
  right: 1.125em;
  z-index: 4;
}
.select.is-rounded select {
  border-radius: 290486px;
  padding-left: 1em;
}
.select select {
  cursor: pointer;
  display: block;
  font-size: 1em;
  max-width: 100%;
  outline: none;
}
.select select::-ms-expand {
  display: none;
}
.select select[disabled]:hover, fieldset[disabled] .select select:hover {
  border-color: whitesmoke;
}
.select select:not([multiple]) {
  padding-right: 2.5em;
}
.select select[multiple] {
  height: auto;
  padding: 0;
}
.select select[multiple] option {
  padding: 0.5em 1em;
}
.select:not(.is-multiple):not(.is-loading):hover::after {
  border-color: #363636;
}
.select.is-white:not(:hover)::after {
  border-color: white;
}
.select.is-white select {
  border-color: white;
}
.select.is-white select:hover, .select.is-white select.is-hovered {
  border-color: #f2f2f2;
}
.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}
.select.is-black:not(:hover)::after {
  border-color: #0a0a0a;
}
.select.is-black select {
  border-color: #0a0a0a;
}
.select.is-black select:hover, .select.is-black select.is-hovered {
  border-color: black;
}
.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {
  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
}
.select.is-light:not(:hover)::after {
  border-color: whitesmoke;
}
.select.is-light select {
  border-color: whitesmoke;
}
.select.is-light select:hover, .select.is-light select.is-hovered {
  border-color: #e8e8e8;
}
.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}
.select.is-dark:not(:hover)::after {
  border-color: #363636;
}
.select.is-dark select {
  border-color: #363636;
}
.select.is-dark select:hover, .select.is-dark select.is-hovered {
  border-color: #292929;
}
.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}
.select.is-primary:not(:hover)::after {
  border-color: #7957d5;
}
.select.is-primary select {
  border-color: #7957d5;
}
.select.is-primary select:hover, .select.is-primary select.is-hovered {
  border-color: #6943d0;
}
.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {
  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
}
.select.is-link:not(:hover)::after {
  border-color: #7957d5;
}
.select.is-link select {
  border-color: #7957d5;
}
.select.is-link select:hover, .select.is-link select.is-hovered {
  border-color: #6943d0;
}
.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {
  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
}
.select.is-info:not(:hover)::after {
  border-color: #167df0;
}
.select.is-info select {
  border-color: #167df0;
}
.select.is-info select:hover, .select.is-info select.is-hovered {
  border-color: #0e71de;
}
.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {
  box-shadow: 0 0 0 0.125em rgba(22, 125, 240, 0.25);
}
.select.is-success:not(:hover)::after {
  border-color: #48c774;
}
.select.is-success select {
  border-color: #48c774;
}
.select.is-success select:hover, .select.is-success select.is-hovered {
  border-color: #3abb67;
}
.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {
  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);
}
.select.is-warning:not(:hover)::after {
  border-color: #ffdd57;
}
.select.is-warning select {
  border-color: #ffdd57;
}
.select.is-warning select:hover, .select.is-warning select.is-hovered {
  border-color: #ffd83d;
}
.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {
  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);
}
.select.is-danger:not(:hover)::after {
  border-color: #f14668;
}
.select.is-danger select {
  border-color: #f14668;
}
.select.is-danger select:hover, .select.is-danger select.is-hovered {
  border-color: #ef2e55;
}
.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {
  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);
}
.select.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}
.select.is-medium {
  font-size: 1.25rem;
}
.select.is-large {
  font-size: 1.5rem;
}
.select.is-disabled::after {
  border-color: #7a7a7a;
}
.select.is-fullwidth {
  width: 100%;
}
.select.is-fullwidth select {
  width: 100%;
}
.select.is-loading::after {
  margin-top: 0;
  position: absolute;
  right: 0.625em;
  top: 0.625em;
  transform: none;
}
.select.is-loading.is-small:after {
  font-size: 0.75rem;
}
.select.is-loading.is-medium:after {
  font-size: 1.25rem;
}
.select.is-loading.is-large:after {
  font-size: 1.5rem;
}

.file {
  align-items: stretch;
  display: flex;
  justify-content: flex-start;
  position: relative;
}
.file.is-white .file-cta {
  background-color: white;
  border-color: transparent;
  color: #0a0a0a;
}
.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {
  background-color: #f9f9f9;
  border-color: transparent;
  color: #0a0a0a;
}
.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);
  color: #0a0a0a;
}
.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {
  background-color: #f2f2f2;
  border-color: transparent;
  color: #0a0a0a;
}
.file.is-black .file-cta {
  background-color: #0a0a0a;
  border-color: transparent;
  color: white;
}
.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {
  background-color: #040404;
  border-color: transparent;
  color: white;
}
.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);
  color: white;
}
.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {
  background-color: black;
  border-color: transparent;
  color: white;
}
.file.is-light .file-cta {
  background-color: whitesmoke;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {
  background-color: #eeeeee;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);
  color: rgba(0, 0, 0, 0.7);
}
.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {
  background-color: #e8e8e8;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-dark .file-cta {
  background-color: #363636;
  border-color: transparent;
  color: #fff;
}
.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {
  background-color: #2f2f2f;
  border-color: transparent;
  color: #fff;
}
.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);
  color: #fff;
}
.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {
  background-color: #292929;
  border-color: transparent;
  color: #fff;
}
.file.is-primary .file-cta {
  background-color: #7957d5;
  border-color: transparent;
  color: #fff;
}
.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {
  background-color: #714dd2;
  border-color: transparent;
  color: #fff;
}
.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.25);
  color: #fff;
}
.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {
  background-color: #6943d0;
  border-color: transparent;
  color: #fff;
}
.file.is-link .file-cta {
  background-color: #7957d5;
  border-color: transparent;
  color: #fff;
}
.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {
  background-color: #714dd2;
  border-color: transparent;
  color: #fff;
}
.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.25);
  color: #fff;
}
.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {
  background-color: #6943d0;
  border-color: transparent;
  color: #fff;
}
.file.is-info .file-cta {
  background-color: #167df0;
  border-color: transparent;
  color: #fff;
}
.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {
  background-color: #0f77ea;
  border-color: transparent;
  color: #fff;
}
.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.25);
  color: #fff;
}
.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {
  background-color: #0e71de;
  border-color: transparent;
  color: #fff;
}
.file.is-success .file-cta {
  background-color: #48c774;
  border-color: transparent;
  color: #fff;
}
.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {
  background-color: #3ec46d;
  border-color: transparent;
  color: #fff;
}
.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(72, 199, 116, 0.25);
  color: #fff;
}
.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {
  background-color: #3abb67;
  border-color: transparent;
  color: #fff;
}
.file.is-warning .file-cta {
  background-color: #ffdd57;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {
  background-color: #ffdb4a;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);
  color: rgba(0, 0, 0, 0.7);
}
.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {
  background-color: #ffd83d;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-danger .file-cta {
  background-color: #f14668;
  border-color: transparent;
  color: #fff;
}
.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {
  background-color: #f03a5f;
  border-color: transparent;
  color: #fff;
}
.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.25);
  color: #fff;
}
.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {
  background-color: #ef2e55;
  border-color: transparent;
  color: #fff;
}
.file.is-small {
  font-size: 0.75rem;
}
.file.is-medium {
  font-size: 1.25rem;
}
.file.is-medium .file-icon .fa {
  font-size: 21px;
}
.file.is-large {
  font-size: 1.5rem;
}
.file.is-large .file-icon .fa {
  font-size: 28px;
}
.file.has-name .file-cta {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.file.has-name .file-name {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.file.has-name.is-empty .file-cta {
  border-radius: 4px;
}
.file.has-name.is-empty .file-name {
  display: none;
}
.file.is-boxed .file-label {
  flex-direction: column;
}
.file.is-boxed .file-cta {
  flex-direction: column;
  height: auto;
  padding: 1em 3em;
}
.file.is-boxed .file-name {
  border-width: 0 1px 1px;
}
.file.is-boxed .file-icon {
  height: 1.5em;
  width: 1.5em;
}
.file.is-boxed .file-icon .fa {
  font-size: 21px;
}
.file.is-boxed.is-small .file-icon .fa {
  font-size: 14px;
}
.file.is-boxed.is-medium .file-icon .fa {
  font-size: 28px;
}
.file.is-boxed.is-large .file-icon .fa {
  font-size: 35px;
}
.file.is-boxed.has-name .file-cta {
  border-radius: 4px 4px 0 0;
}
.file.is-boxed.has-name .file-name {
  border-radius: 0 0 4px 4px;
  border-width: 0 1px 1px;
}
.file.is-centered {
  justify-content: center;
}
.file.is-fullwidth .file-label {
  width: 100%;
}
.file.is-fullwidth .file-name {
  flex-grow: 1;
  max-width: none;
}
.file.is-right {
  justify-content: flex-end;
}
.file.is-right .file-cta {
  border-radius: 0 4px 4px 0;
}
.file.is-right .file-name {
  border-radius: 4px 0 0 4px;
  border-width: 1px 0 1px 1px;
  order: -1;
}

.file-label {
  align-items: stretch;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
}
.file-label:hover .file-cta {
  background-color: #eeeeee;
  color: #363636;
}
.file-label:hover .file-name {
  border-color: #d5d5d5;
}
.file-label:active .file-cta {
  background-color: #e8e8e8;
  color: #363636;
}
.file-label:active .file-name {
  border-color: #cfcfcf;
}

.file-input {
  height: 100%;
  left: 0;
  opacity: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 100%;
}

.file-cta,
.file-name {
  border-color: #dbdbdb;
  border-radius: 4px;
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  white-space: nowrap;
}

.file-cta {
  background-color: whitesmoke;
  color: #4a4a4a;
}

.file-name {
  border-color: #dbdbdb;
  border-style: solid;
  border-width: 1px 1px 1px 0;
  display: block;
  max-width: 16em;
  overflow: hidden;
  text-align: inherit;
  text-overflow: ellipsis;
}

.file-icon {
  align-items: center;
  display: flex;
  height: 1em;
  justify-content: center;
  margin-right: 0.5em;
  width: 1em;
}
.file-icon .fa {
  font-size: 14px;
}

.label {
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 600;
}
.label:not(:last-child) {
  margin-bottom: 0.5em;
}
.label.is-small {
  font-size: 0.75rem;
}
.label.is-medium {
  font-size: 1.25rem;
}
.label.is-large {
  font-size: 1.5rem;
}

.help {
  display: block;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
.help.is-white {
  color: white;
}
.help.is-black {
  color: #0a0a0a;
}
.help.is-light {
  color: whitesmoke;
}
.help.is-dark {
  color: #363636;
}
.help.is-primary {
  color: #7957d5;
}
.help.is-link {
  color: #7957d5;
}
.help.is-info {
  color: #167df0;
}
.help.is-success {
  color: #48c774;
}
.help.is-warning {
  color: #ffdd57;
}
.help.is-danger {
  color: #f14668;
}

.field:not(:last-child) {
  margin-bottom: 0.75rem;
}
.field.has-addons {
  display: flex;
  justify-content: flex-start;
}
.field.has-addons .control:not(:last-child) {
  margin-right: -1px;
}
.field.has-addons .control:not(:first-child):not(:last-child) .button,
.field.has-addons .control:not(:first-child):not(:last-child) .input,
.field.has-addons .control:not(:first-child):not(:last-child) .select select {
  border-radius: 0;
}
.field.has-addons .control:first-child:not(:only-child) .button,
.field.has-addons .control:first-child:not(:only-child) .input,
.field.has-addons .control:first-child:not(:only-child) .select select {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.field.has-addons .control:last-child:not(:only-child) .button,
.field.has-addons .control:last-child:not(:only-child) .input,
.field.has-addons .control:last-child:not(:only-child) .select select {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,
.field.has-addons .control .input:not([disabled]):hover,
.field.has-addons .control .input:not([disabled]).is-hovered,
.field.has-addons .control .select select:not([disabled]):hover,
.field.has-addons .control .select select:not([disabled]).is-hovered {
  z-index: 2;
}
.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,
.field.has-addons .control .input:not([disabled]):focus,
.field.has-addons .control .input:not([disabled]).is-focused,
.field.has-addons .control .input:not([disabled]):active,
.field.has-addons .control .input:not([disabled]).is-active,
.field.has-addons .control .select select:not([disabled]):focus,
.field.has-addons .control .select select:not([disabled]).is-focused,
.field.has-addons .control .select select:not([disabled]):active,
.field.has-addons .control .select select:not([disabled]).is-active {
  z-index: 3;
}
.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,
.field.has-addons .control .input:not([disabled]):focus:hover,
.field.has-addons .control .input:not([disabled]).is-focused:hover,
.field.has-addons .control .input:not([disabled]):active:hover,
.field.has-addons .control .input:not([disabled]).is-active:hover,
.field.has-addons .control .select select:not([disabled]):focus:hover,
.field.has-addons .control .select select:not([disabled]).is-focused:hover,
.field.has-addons .control .select select:not([disabled]):active:hover,
.field.has-addons .control .select select:not([disabled]).is-active:hover {
  z-index: 4;
}
.field.has-addons .control.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.field.has-addons.has-addons-centered {
  justify-content: center;
}
.field.has-addons.has-addons-right {
  justify-content: flex-end;
}
.field.has-addons.has-addons-fullwidth .control {
  flex-grow: 1;
  flex-shrink: 0;
}
.field.is-grouped {
  display: flex;
  justify-content: flex-start;
}
.field.is-grouped > .control {
  flex-shrink: 0;
}
.field.is-grouped > .control:not(:last-child) {
  margin-bottom: 0;
  margin-right: 0.75rem;
}
.field.is-grouped > .control.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.field.is-grouped.is-grouped-centered {
  justify-content: center;
}
.field.is-grouped.is-grouped-right {
  justify-content: flex-end;
}
.field.is-grouped.is-grouped-multiline {
  flex-wrap: wrap;
}
.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {
  margin-bottom: 0.75rem;
}
.field.is-grouped.is-grouped-multiline:last-child {
  margin-bottom: -0.75rem;
}
.field.is-grouped.is-grouped-multiline:not(:last-child) {
  margin-bottom: 0;
}
@media screen and (min-width: 769px), print {
  .field.is-horizontal {
    display: flex;
  }
}

.field-label .label {
  font-size: inherit;
}
@media screen and (max-width: 768px) {
  .field-label {
    margin-bottom: 0.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .field-label {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    margin-right: 1.5rem;
    text-align: right;
  }
  .field-label.is-small {
    font-size: 0.75rem;
    padding-top: 0.375em;
  }
  .field-label.is-normal {
    padding-top: 0.375em;
  }
  .field-label.is-medium {
    font-size: 1.25rem;
    padding-top: 0.375em;
  }
  .field-label.is-large {
    font-size: 1.5rem;
    padding-top: 0.375em;
  }
}

.field-body .field .field {
  margin-bottom: 0;
}
@media screen and (min-width: 769px), print {
  .field-body {
    display: flex;
    flex-basis: 0;
    flex-grow: 5;
    flex-shrink: 1;
  }
  .field-body .field {
    margin-bottom: 0;
  }
  .field-body > .field {
    flex-shrink: 1;
  }
  .field-body > .field:not(.is-narrow) {
    flex-grow: 1;
  }
  .field-body > .field:not(:last-child) {
    margin-right: 0.75rem;
  }
}

.control {
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: inherit;
}
.control.has-icons-left .input:focus ~ .icon,
.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,
.control.has-icons-right .select:focus ~ .icon {
  color: #4a4a4a;
}
.control.has-icons-left .input.is-small ~ .icon,
.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,
.control.has-icons-right .select.is-small ~ .icon {
  font-size: 0.75rem;
}
.control.has-icons-left .input.is-medium ~ .icon,
.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,
.control.has-icons-right .select.is-medium ~ .icon {
  font-size: 1.25rem;
}
.control.has-icons-left .input.is-large ~ .icon,
.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,
.control.has-icons-right .select.is-large ~ .icon {
  font-size: 1.5rem;
}
.control.has-icons-left .icon, .control.has-icons-right .icon {
  color: #dbdbdb;
  height: 2.5em;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 2.5em;
  z-index: 4;
}
.control.has-icons-left .input,
.control.has-icons-left .select select {
  padding-left: 2.5em;
}
.control.has-icons-left .icon.is-left {
  left: 0;
}
.control.has-icons-right .input,
.control.has-icons-right .select select {
  padding-right: 2.5em;
}
.control.has-icons-right .icon.is-right {
  right: 0;
}
.control.is-loading::after {
  position: absolute !important;
  right: 0.625em;
  top: 0.625em;
  z-index: 4;
}
.control.is-loading.is-small:after {
  font-size: 0.75rem;
}
.control.is-loading.is-medium:after {
  font-size: 1.25rem;
}
.control.is-loading.is-large:after {
  font-size: 1.5rem;
}

/* Bulma Components */
.breadcrumb {
  font-size: 1rem;
  white-space: nowrap;
}
.breadcrumb a {
  align-items: center;
  color: #7957d5;
  display: flex;
  justify-content: center;
  padding: 0 0.75em;
}
.breadcrumb a:hover {
  color: #363636;
}
.breadcrumb li {
  align-items: center;
  display: flex;
}
.breadcrumb li:first-child a {
  padding-left: 0;
}
.breadcrumb li.is-active a {
  color: #363636;
  cursor: default;
  pointer-events: none;
}
.breadcrumb li + li::before {
  color: #b5b5b5;
  content: "/";
}
.breadcrumb ul,
.breadcrumb ol {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.breadcrumb .icon:first-child {
  margin-right: 0.5em;
}
.breadcrumb .icon:last-child {
  margin-left: 0.5em;
}
.breadcrumb.is-centered ol,
.breadcrumb.is-centered ul {
  justify-content: center;
}
.breadcrumb.is-right ol,
.breadcrumb.is-right ul {
  justify-content: flex-end;
}
.breadcrumb.is-small {
  font-size: 0.75rem;
}
.breadcrumb.is-medium {
  font-size: 1.25rem;
}
.breadcrumb.is-large {
  font-size: 1.5rem;
}
.breadcrumb.has-arrow-separator li + li::before {
  content: "\u2192";
}
.breadcrumb.has-bullet-separator li + li::before {
  content: "\u2022";
}
.breadcrumb.has-dot-separator li + li::before {
  content: "\xB7";
}
.breadcrumb.has-succeeds-separator li + li::before {
  content: "\u227B";
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
}

.card-footer:first-child, .card-content:first-child, .card-header:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.card-footer:last-child, .card-content:last-child, .card-header:last-child {
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.card-header {
  background-color: transparent;
  align-items: stretch;
  box-shadow: 0 0.125em 0.25em rgba(10, 10, 10, 0.1);
  display: flex;
}

.card-header-title {
  align-items: center;
  color: #363636;
  display: flex;
  flex-grow: 1;
  font-weight: 700;
  padding: 0.75rem 1rem;
}
.card-header-title.is-centered {
  justify-content: center;
}

.card-header-icon {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.75rem 1rem;
}

.card-image {
  display: block;
  position: relative;
}
.card-image:first-child img {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.card-image:last-child img {
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.card-content {
  background-color: transparent;
  padding: 1.5rem;
}

.card-footer {
  background-color: transparent;
  border-top: 1px solid #ededed;
  align-items: stretch;
  display: flex;
}

.card-footer-item {
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  padding: 0.75rem;
}
.card-footer-item:not(:last-child) {
  border-right: 1px solid #ededed;
}

.card .media:not(:last-child) {
  margin-bottom: 1.5rem;
}

.dropdown {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {
  display: block;
}
.dropdown.is-right .dropdown-menu {
  left: auto;
  right: 0;
}
.dropdown.is-up .dropdown-menu {
  bottom: 100%;
  padding-bottom: 4px;
  padding-top: initial;
  top: auto;
}

.dropdown-menu {
  display: none;
  left: 0;
  min-width: 12rem;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  z-index: 20;
}

.dropdown-content {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}

.dropdown-item, .dropdown .dropdown-menu .has-link a {
  color: #4a4a4a;
  display: block;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 0.375rem 1rem;
  position: relative;
}

a.dropdown-item, .dropdown .dropdown-menu .has-link a,
button.dropdown-item {
  padding-right: 3rem;
  text-align: inherit;
  white-space: nowrap;
  width: 100%;
}
a.dropdown-item:hover, .dropdown .dropdown-menu .has-link a:hover,
button.dropdown-item:hover {
  background-color: whitesmoke;
  color: #0a0a0a;
}
a.dropdown-item.is-active, .dropdown .dropdown-menu .has-link a.is-active,
button.dropdown-item.is-active {
  background-color: #7957d5;
  color: #fff;
}

.dropdown-divider {
  background-color: #ededed;
  border: none;
  display: block;
  height: 1px;
  margin: 0.5rem 0;
}

.level {
  align-items: center;
  justify-content: space-between;
}
.level code {
  border-radius: 4px;
}
.level img {
  display: inline-block;
  vertical-align: top;
}
.level.is-mobile {
  display: flex;
}
.level.is-mobile .level-left,
.level.is-mobile .level-right {
  display: flex;
}
.level.is-mobile .level-left + .level-right {
  margin-top: 0;
}
.level.is-mobile .level-item:not(:last-child) {
  margin-bottom: 0;
  margin-right: 0.75rem;
}
.level.is-mobile .level-item:not(.is-narrow) {
  flex-grow: 1;
}
@media screen and (min-width: 769px), print {
  .level {
    display: flex;
  }
  .level > .level-item:not(.is-narrow) {
    flex-grow: 1;
  }
}

.level-item {
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
}
.level-item .title,
.level-item .subtitle {
  margin-bottom: 0;
}
@media screen and (max-width: 768px) {
  .level-item:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}

.level-left,
.level-right {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}
.level-left .level-item.is-flexible,
.level-right .level-item.is-flexible {
  flex-grow: 1;
}
@media screen and (min-width: 769px), print {
  .level-left .level-item:not(:last-child),
.level-right .level-item:not(:last-child) {
    margin-right: 0.75rem;
  }
}

.level-left {
  align-items: center;
  justify-content: flex-start;
}
@media screen and (max-width: 768px) {
  .level-left + .level-right {
    margin-top: 1.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .level-left {
    display: flex;
  }
}

.level-right {
  align-items: center;
  justify-content: flex-end;
}
@media screen and (min-width: 769px), print {
  .level-right {
    display: flex;
  }
}

.media {
  align-items: flex-start;
  display: flex;
  text-align: inherit;
}
.media .content:not(:last-child) {
  margin-bottom: 0.75rem;
}
.media .media {
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  display: flex;
  padding-top: 0.75rem;
}
.media .media .content:not(:last-child),
.media .media .control:not(:last-child) {
  margin-bottom: 0.5rem;
}
.media .media .media {
  padding-top: 0.5rem;
}
.media .media .media + .media {
  margin-top: 0.5rem;
}
.media + .media {
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  margin-top: 1rem;
  padding-top: 1rem;
}
.media.is-large + .media {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
}

.media-left,
.media-right {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}

.media-left {
  margin-right: 1rem;
}

.media-right {
  margin-left: 1rem;
}

.media-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: inherit;
}

@media screen and (max-width: 768px) {
  .media-content {
    overflow-x: auto;
  }
}
.menu {
  font-size: 1rem;
}
.menu.is-small {
  font-size: 0.75rem;
}
.menu.is-medium {
  font-size: 1.25rem;
}
.menu.is-large {
  font-size: 1.5rem;
}

.menu-list {
  line-height: 1.25;
}
.menu-list a {
  border-radius: 2px;
  color: #4a4a4a;
  display: block;
  padding: 0.5em 0.75em;
}
.menu-list a:hover {
  background-color: whitesmoke;
  color: #363636;
}
.menu-list a.is-active {
  background-color: #7957d5;
  color: #fff;
}
.menu-list li ul {
  border-left: 1px solid #dbdbdb;
  margin: 0.75em;
  padding-left: 0.75em;
}

.menu-label {
  color: #7a7a7a;
  font-size: 0.75em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.menu-label:not(:first-child) {
  margin-top: 1em;
}
.menu-label:not(:last-child) {
  margin-bottom: 1em;
}

.message {
  background-color: whitesmoke;
  border-radius: 4px;
  font-size: 1rem;
}
.message strong {
  color: currentColor;
}
.message a:not(.button):not(.tag):not(.dropdown-item) {
  color: currentColor;
  text-decoration: underline;
}
.message.is-small {
  font-size: 0.75rem;
}
.message.is-medium {
  font-size: 1.25rem;
}
.message.is-large {
  font-size: 1.5rem;
}
.message.is-white {
  background-color: white;
}
.message.is-white .message-header {
  background-color: white;
  color: #0a0a0a;
}
.message.is-white .message-body {
  border-color: white;
}
.message.is-black {
  background-color: #fafafa;
}
.message.is-black .message-header {
  background-color: #0a0a0a;
  color: white;
}
.message.is-black .message-body {
  border-color: #0a0a0a;
}
.message.is-light {
  background-color: #fafafa;
}
.message.is-light .message-header {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.message.is-light .message-body {
  border-color: whitesmoke;
}
.message.is-dark {
  background-color: #fafafa;
}
.message.is-dark .message-header {
  background-color: #363636;
  color: #fff;
}
.message.is-dark .message-body {
  border-color: #363636;
}
.message.is-primary {
  background-color: #f2effb;
}
.message.is-primary .message-header {
  background-color: #7957d5;
  color: #fff;
}
.message.is-primary .message-body {
  border-color: #7957d5;
  color: #552fbc;
}
.message.is-link {
  background-color: #f2effb;
}
.message.is-link .message-header {
  background-color: #7957d5;
  color: #fff;
}
.message.is-link .message-body {
  border-color: #7957d5;
  color: #552fbc;
}
.message.is-info {
  background-color: #ecf4fe;
}
.message.is-info .message-header {
  background-color: #167df0;
  color: #fff;
}
.message.is-info .message-body {
  border-color: #167df0;
  color: #0d68ce;
}
.message.is-success {
  background-color: #effaf3;
}
.message.is-success .message-header {
  background-color: #48c774;
  color: #fff;
}
.message.is-success .message-body {
  border-color: #48c774;
  color: #257942;
}
.message.is-warning {
  background-color: #fffbeb;
}
.message.is-warning .message-header {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}
.message.is-warning .message-body {
  border-color: #ffdd57;
  color: #947600;
}
.message.is-danger {
  background-color: #feecf0;
}
.message.is-danger .message-header {
  background-color: #f14668;
  color: #fff;
}
.message.is-danger .message-body {
  border-color: #f14668;
  color: #cc0f35;
}

.message-header {
  align-items: center;
  background-color: #4a4a4a;
  border-radius: 4px 4px 0 0;
  color: #fff;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  line-height: 1.25;
  padding: 0.75em 1em;
  position: relative;
}
.message-header .delete {
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 0.75em;
}
.message-header + .message-body {
  border-width: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.message-body {
  border-color: #dbdbdb;
  border-radius: 4px;
  border-style: solid;
  border-width: 0 0 0 4px;
  color: #4a4a4a;
  padding: 1.25em 1.5em;
}
.message-body code,
.message-body pre {
  background-color: white;
}
.message-body pre code {
  background-color: transparent;
}

.modal {
  align-items: center;
  display: none;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 40;
}
.modal.is-active {
  display: flex;
}

.modal-background {
  background-color: rgba(10, 10, 10, 0.86);
}

.modal-content,
.modal-card {
  margin: 0 20px;
  max-height: calc(100vh - 160px);
  overflow: auto;
  position: relative;
  width: 100%;
}
@media screen and (min-width: 769px) {
  .modal-content,
.modal-card {
    margin: 0 auto;
    max-height: calc(100vh - 40px);
    width: 640px;
  }
}

.modal-close {
  background: none;
  height: 40px;
  position: fixed;
  right: 20px;
  top: 20px;
  width: 40px;
}

.modal-card {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 40px);
  overflow: hidden;
  -ms-overflow-y: visible;
}

.modal-card-head,
.modal-card-foot {
  align-items: center;
  background-color: whitesmoke;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
}

.modal-card-head {
  border-bottom: 1px solid #dbdbdb;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.modal-card-title {
  color: #363636;
  flex-grow: 1;
  flex-shrink: 0;
  font-size: 1.5rem;
  line-height: 1;
}

.modal-card-foot {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top: 1px solid #dbdbdb;
}
.modal-card-foot .button:not(:last-child) {
  margin-right: 0.5em;
}

.modal-card-body {
  -webkit-overflow-scrolling: touch;
  background-color: white;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  padding: 20px;
}

.navbar {
  background-color: white;
  min-height: 3.25rem;
  position: relative;
  z-index: 30;
}
.navbar.is-white {
  background-color: white;
  color: #0a0a0a;
}
.navbar.is-white .navbar-brand > .navbar-item,
.navbar.is-white .navbar-brand .navbar-link {
  color: #0a0a0a;
}
.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,
.navbar.is-white .navbar-brand .navbar-link:focus,
.navbar.is-white .navbar-brand .navbar-link:hover,
.navbar.is-white .navbar-brand .navbar-link.is-active {
  background-color: #f2f2f2;
  color: #0a0a0a;
}
.navbar.is-white .navbar-brand .navbar-link::after {
  border-color: #0a0a0a;
}
.navbar.is-white .navbar-burger {
  color: #0a0a0a;
}
@media screen and (min-width: 1024px) {
  .navbar.is-white .navbar-start > .navbar-item,
.navbar.is-white .navbar-start .navbar-link,
.navbar.is-white .navbar-end > .navbar-item,
.navbar.is-white .navbar-end .navbar-link {
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,
.navbar.is-white .navbar-start .navbar-link:focus,
.navbar.is-white .navbar-start .navbar-link:hover,
.navbar.is-white .navbar-start .navbar-link.is-active,
.navbar.is-white .navbar-end > a.navbar-item:focus,
.navbar.is-white .navbar-end > a.navbar-item:hover,
.navbar.is-white .navbar-end > a.navbar-item.is-active,
.navbar.is-white .navbar-end .navbar-link:focus,
.navbar.is-white .navbar-end .navbar-link:hover,
.navbar.is-white .navbar-end .navbar-link.is-active {
    background-color: #f2f2f2;
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-start .navbar-link::after,
.navbar.is-white .navbar-end .navbar-link::after {
    border-color: #0a0a0a;
  }
  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #f2f2f2;
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {
    background-color: white;
    color: #0a0a0a;
  }
}
.navbar.is-black {
  background-color: #0a0a0a;
  color: white;
}
.navbar.is-black .navbar-brand > .navbar-item,
.navbar.is-black .navbar-brand .navbar-link {
  color: white;
}
.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,
.navbar.is-black .navbar-brand .navbar-link:focus,
.navbar.is-black .navbar-brand .navbar-link:hover,
.navbar.is-black .navbar-brand .navbar-link.is-active {
  background-color: black;
  color: white;
}
.navbar.is-black .navbar-brand .navbar-link::after {
  border-color: white;
}
.navbar.is-black .navbar-burger {
  color: white;
}
@media screen and (min-width: 1024px) {
  .navbar.is-black .navbar-start > .navbar-item,
.navbar.is-black .navbar-start .navbar-link,
.navbar.is-black .navbar-end > .navbar-item,
.navbar.is-black .navbar-end .navbar-link {
    color: white;
  }
  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,
.navbar.is-black .navbar-start .navbar-link:focus,
.navbar.is-black .navbar-start .navbar-link:hover,
.navbar.is-black .navbar-start .navbar-link.is-active,
.navbar.is-black .navbar-end > a.navbar-item:focus,
.navbar.is-black .navbar-end > a.navbar-item:hover,
.navbar.is-black .navbar-end > a.navbar-item.is-active,
.navbar.is-black .navbar-end .navbar-link:focus,
.navbar.is-black .navbar-end .navbar-link:hover,
.navbar.is-black .navbar-end .navbar-link.is-active {
    background-color: black;
    color: white;
  }
  .navbar.is-black .navbar-start .navbar-link::after,
.navbar.is-black .navbar-end .navbar-link::after {
    border-color: white;
  }
  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: black;
    color: white;
  }
  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {
    background-color: #0a0a0a;
    color: white;
  }
}
.navbar.is-light {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-light .navbar-brand > .navbar-item,
.navbar.is-light .navbar-brand .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,
.navbar.is-light .navbar-brand .navbar-link:focus,
.navbar.is-light .navbar-brand .navbar-link:hover,
.navbar.is-light .navbar-brand .navbar-link.is-active {
  background-color: #e8e8e8;
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-light .navbar-brand .navbar-link::after {
  border-color: rgba(0, 0, 0, 0.7);
}
.navbar.is-light .navbar-burger {
  color: rgba(0, 0, 0, 0.7);
}
@media screen and (min-width: 1024px) {
  .navbar.is-light .navbar-start > .navbar-item,
.navbar.is-light .navbar-start .navbar-link,
.navbar.is-light .navbar-end > .navbar-item,
.navbar.is-light .navbar-end .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,
.navbar.is-light .navbar-start .navbar-link:focus,
.navbar.is-light .navbar-start .navbar-link:hover,
.navbar.is-light .navbar-start .navbar-link.is-active,
.navbar.is-light .navbar-end > a.navbar-item:focus,
.navbar.is-light .navbar-end > a.navbar-item:hover,
.navbar.is-light .navbar-end > a.navbar-item.is-active,
.navbar.is-light .navbar-end .navbar-link:focus,
.navbar.is-light .navbar-end .navbar-link:hover,
.navbar.is-light .navbar-end .navbar-link.is-active {
    background-color: #e8e8e8;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-start .navbar-link::after,
.navbar.is-light .navbar-end .navbar-link::after {
    border-color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #e8e8e8;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: rgba(0, 0, 0, 0.7);
  }
}
.navbar.is-dark {
  background-color: #363636;
  color: #fff;
}
.navbar.is-dark .navbar-brand > .navbar-item,
.navbar.is-dark .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,
.navbar.is-dark .navbar-brand .navbar-link:focus,
.navbar.is-dark .navbar-brand .navbar-link:hover,
.navbar.is-dark .navbar-brand .navbar-link.is-active {
  background-color: #292929;
  color: #fff;
}
.navbar.is-dark .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-dark .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-dark .navbar-start > .navbar-item,
.navbar.is-dark .navbar-start .navbar-link,
.navbar.is-dark .navbar-end > .navbar-item,
.navbar.is-dark .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,
.navbar.is-dark .navbar-start .navbar-link:focus,
.navbar.is-dark .navbar-start .navbar-link:hover,
.navbar.is-dark .navbar-start .navbar-link.is-active,
.navbar.is-dark .navbar-end > a.navbar-item:focus,
.navbar.is-dark .navbar-end > a.navbar-item:hover,
.navbar.is-dark .navbar-end > a.navbar-item.is-active,
.navbar.is-dark .navbar-end .navbar-link:focus,
.navbar.is-dark .navbar-end .navbar-link:hover,
.navbar.is-dark .navbar-end .navbar-link.is-active {
    background-color: #292929;
    color: #fff;
  }
  .navbar.is-dark .navbar-start .navbar-link::after,
.navbar.is-dark .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #292929;
    color: #fff;
  }
  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {
    background-color: #363636;
    color: #fff;
  }
}
.navbar.is-primary {
  background-color: #7957d5;
  color: #fff;
}
.navbar.is-primary .navbar-brand > .navbar-item,
.navbar.is-primary .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,
.navbar.is-primary .navbar-brand .navbar-link:focus,
.navbar.is-primary .navbar-brand .navbar-link:hover,
.navbar.is-primary .navbar-brand .navbar-link.is-active {
  background-color: #6943d0;
  color: #fff;
}
.navbar.is-primary .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-primary .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-primary .navbar-start > .navbar-item,
.navbar.is-primary .navbar-start .navbar-link,
.navbar.is-primary .navbar-end > .navbar-item,
.navbar.is-primary .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,
.navbar.is-primary .navbar-start .navbar-link:focus,
.navbar.is-primary .navbar-start .navbar-link:hover,
.navbar.is-primary .navbar-start .navbar-link.is-active,
.navbar.is-primary .navbar-end > a.navbar-item:focus,
.navbar.is-primary .navbar-end > a.navbar-item:hover,
.navbar.is-primary .navbar-end > a.navbar-item.is-active,
.navbar.is-primary .navbar-end .navbar-link:focus,
.navbar.is-primary .navbar-end .navbar-link:hover,
.navbar.is-primary .navbar-end .navbar-link.is-active {
    background-color: #6943d0;
    color: #fff;
  }
  .navbar.is-primary .navbar-start .navbar-link::after,
.navbar.is-primary .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #6943d0;
    color: #fff;
  }
  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {
    background-color: #7957d5;
    color: #fff;
  }
}
.navbar.is-link {
  background-color: #7957d5;
  color: #fff;
}
.navbar.is-link .navbar-brand > .navbar-item,
.navbar.is-link .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,
.navbar.is-link .navbar-brand .navbar-link:focus,
.navbar.is-link .navbar-brand .navbar-link:hover,
.navbar.is-link .navbar-brand .navbar-link.is-active {
  background-color: #6943d0;
  color: #fff;
}
.navbar.is-link .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-link .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-link .navbar-start > .navbar-item,
.navbar.is-link .navbar-start .navbar-link,
.navbar.is-link .navbar-end > .navbar-item,
.navbar.is-link .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,
.navbar.is-link .navbar-start .navbar-link:focus,
.navbar.is-link .navbar-start .navbar-link:hover,
.navbar.is-link .navbar-start .navbar-link.is-active,
.navbar.is-link .navbar-end > a.navbar-item:focus,
.navbar.is-link .navbar-end > a.navbar-item:hover,
.navbar.is-link .navbar-end > a.navbar-item.is-active,
.navbar.is-link .navbar-end .navbar-link:focus,
.navbar.is-link .navbar-end .navbar-link:hover,
.navbar.is-link .navbar-end .navbar-link.is-active {
    background-color: #6943d0;
    color: #fff;
  }
  .navbar.is-link .navbar-start .navbar-link::after,
.navbar.is-link .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #6943d0;
    color: #fff;
  }
  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {
    background-color: #7957d5;
    color: #fff;
  }
}
.navbar.is-info {
  background-color: #167df0;
  color: #fff;
}
.navbar.is-info .navbar-brand > .navbar-item,
.navbar.is-info .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,
.navbar.is-info .navbar-brand .navbar-link:focus,
.navbar.is-info .navbar-brand .navbar-link:hover,
.navbar.is-info .navbar-brand .navbar-link.is-active {
  background-color: #0e71de;
  color: #fff;
}
.navbar.is-info .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-info .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-info .navbar-start > .navbar-item,
.navbar.is-info .navbar-start .navbar-link,
.navbar.is-info .navbar-end > .navbar-item,
.navbar.is-info .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,
.navbar.is-info .navbar-start .navbar-link:focus,
.navbar.is-info .navbar-start .navbar-link:hover,
.navbar.is-info .navbar-start .navbar-link.is-active,
.navbar.is-info .navbar-end > a.navbar-item:focus,
.navbar.is-info .navbar-end > a.navbar-item:hover,
.navbar.is-info .navbar-end > a.navbar-item.is-active,
.navbar.is-info .navbar-end .navbar-link:focus,
.navbar.is-info .navbar-end .navbar-link:hover,
.navbar.is-info .navbar-end .navbar-link.is-active {
    background-color: #0e71de;
    color: #fff;
  }
  .navbar.is-info .navbar-start .navbar-link::after,
.navbar.is-info .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #0e71de;
    color: #fff;
  }
  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {
    background-color: #167df0;
    color: #fff;
  }
}
.navbar.is-success {
  background-color: #48c774;
  color: #fff;
}
.navbar.is-success .navbar-brand > .navbar-item,
.navbar.is-success .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,
.navbar.is-success .navbar-brand .navbar-link:focus,
.navbar.is-success .navbar-brand .navbar-link:hover,
.navbar.is-success .navbar-brand .navbar-link.is-active {
  background-color: #3abb67;
  color: #fff;
}
.navbar.is-success .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-success .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-success .navbar-start > .navbar-item,
.navbar.is-success .navbar-start .navbar-link,
.navbar.is-success .navbar-end > .navbar-item,
.navbar.is-success .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,
.navbar.is-success .navbar-start .navbar-link:focus,
.navbar.is-success .navbar-start .navbar-link:hover,
.navbar.is-success .navbar-start .navbar-link.is-active,
.navbar.is-success .navbar-end > a.navbar-item:focus,
.navbar.is-success .navbar-end > a.navbar-item:hover,
.navbar.is-success .navbar-end > a.navbar-item.is-active,
.navbar.is-success .navbar-end .navbar-link:focus,
.navbar.is-success .navbar-end .navbar-link:hover,
.navbar.is-success .navbar-end .navbar-link.is-active {
    background-color: #3abb67;
    color: #fff;
  }
  .navbar.is-success .navbar-start .navbar-link::after,
.navbar.is-success .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #3abb67;
    color: #fff;
  }
  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {
    background-color: #48c774;
    color: #fff;
  }
}
.navbar.is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-warning .navbar-brand > .navbar-item,
.navbar.is-warning .navbar-brand .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,
.navbar.is-warning .navbar-brand .navbar-link:focus,
.navbar.is-warning .navbar-brand .navbar-link:hover,
.navbar.is-warning .navbar-brand .navbar-link.is-active {
  background-color: #ffd83d;
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-warning .navbar-brand .navbar-link::after {
  border-color: rgba(0, 0, 0, 0.7);
}
.navbar.is-warning .navbar-burger {
  color: rgba(0, 0, 0, 0.7);
}
@media screen and (min-width: 1024px) {
  .navbar.is-warning .navbar-start > .navbar-item,
.navbar.is-warning .navbar-start .navbar-link,
.navbar.is-warning .navbar-end > .navbar-item,
.navbar.is-warning .navbar-end .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,
.navbar.is-warning .navbar-start .navbar-link:focus,
.navbar.is-warning .navbar-start .navbar-link:hover,
.navbar.is-warning .navbar-start .navbar-link.is-active,
.navbar.is-warning .navbar-end > a.navbar-item:focus,
.navbar.is-warning .navbar-end > a.navbar-item:hover,
.navbar.is-warning .navbar-end > a.navbar-item.is-active,
.navbar.is-warning .navbar-end .navbar-link:focus,
.navbar.is-warning .navbar-end .navbar-link:hover,
.navbar.is-warning .navbar-end .navbar-link.is-active {
    background-color: #ffd83d;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-start .navbar-link::after,
.navbar.is-warning .navbar-end .navbar-link::after {
    border-color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #ffd83d;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {
    background-color: #ffdd57;
    color: rgba(0, 0, 0, 0.7);
  }
}
.navbar.is-danger {
  background-color: #f14668;
  color: #fff;
}
.navbar.is-danger .navbar-brand > .navbar-item,
.navbar.is-danger .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,
.navbar.is-danger .navbar-brand .navbar-link:focus,
.navbar.is-danger .navbar-brand .navbar-link:hover,
.navbar.is-danger .navbar-brand .navbar-link.is-active {
  background-color: #ef2e55;
  color: #fff;
}
.navbar.is-danger .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-danger .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-danger .navbar-start > .navbar-item,
.navbar.is-danger .navbar-start .navbar-link,
.navbar.is-danger .navbar-end > .navbar-item,
.navbar.is-danger .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,
.navbar.is-danger .navbar-start .navbar-link:focus,
.navbar.is-danger .navbar-start .navbar-link:hover,
.navbar.is-danger .navbar-start .navbar-link.is-active,
.navbar.is-danger .navbar-end > a.navbar-item:focus,
.navbar.is-danger .navbar-end > a.navbar-item:hover,
.navbar.is-danger .navbar-end > a.navbar-item.is-active,
.navbar.is-danger .navbar-end .navbar-link:focus,
.navbar.is-danger .navbar-end .navbar-link:hover,
.navbar.is-danger .navbar-end .navbar-link.is-active {
    background-color: #ef2e55;
    color: #fff;
  }
  .navbar.is-danger .navbar-start .navbar-link::after,
.navbar.is-danger .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #ef2e55;
    color: #fff;
  }
  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {
    background-color: #f14668;
    color: #fff;
  }
}
.navbar > .container {
  align-items: stretch;
  display: flex;
  min-height: 3.25rem;
  width: 100%;
}
.navbar.has-shadow {
  box-shadow: 0 2px 0 0 whitesmoke;
}
.navbar.is-fixed-bottom, .navbar.is-fixed-top {
  left: 0;
  position: fixed;
  right: 0;
  z-index: 30;
}
.navbar.is-fixed-bottom {
  bottom: 0;
}
.navbar.is-fixed-bottom.has-shadow {
  box-shadow: 0 -2px 0 0 whitesmoke;
}
.navbar.is-fixed-top {
  top: 0;
}

html.has-navbar-fixed-top,
body.has-navbar-fixed-top {
  padding-top: 3.25rem;
}
html.has-navbar-fixed-bottom,
body.has-navbar-fixed-bottom {
  padding-bottom: 3.25rem;
}

.navbar-brand,
.navbar-tabs {
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
}

.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {
  background-color: transparent;
}

.navbar-tabs {
  -webkit-overflow-scrolling: touch;
  max-width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
}

.navbar-burger {
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
}
.navbar-burger span {
  background-color: currentColor;
  display: block;
  height: 1px;
  left: calc(50% - 8px);
  position: absolute;
  transform-origin: center;
  transition-duration: 86ms;
  transition-property: background-color, opacity, transform;
  transition-timing-function: ease-out;
  width: 16px;
}
.navbar-burger span:nth-child(1) {
  top: calc(50% - 6px);
}
.navbar-burger span:nth-child(2) {
  top: calc(50% - 1px);
}
.navbar-burger span:nth-child(3) {
  top: calc(50% + 4px);
}
.navbar-burger:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.navbar-burger.is-active span:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}
.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
}
.navbar-burger.is-active span:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}

.navbar-menu {
  display: none;
}

.navbar-item,
.navbar-link {
  color: #4a4a4a;
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
}
.navbar-item .icon:only-child,
.navbar-link .icon:only-child {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

a.navbar-item,
.navbar-link {
  cursor: pointer;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: #fafafa;
  color: #7957d5;
}

.navbar-item {
  flex-grow: 0;
  flex-shrink: 0;
}
.navbar-item img {
  max-height: 1.75rem;
}
.navbar-item.has-dropdown {
  padding: 0;
}
.navbar-item.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.navbar-item.is-tab {
  border-bottom: 1px solid transparent;
  min-height: 3.25rem;
  padding-bottom: calc(0.5rem - 1px);
}
.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {
  background-color: transparent;
  border-bottom-color: #7957d5;
}
.navbar-item.is-tab.is-active {
  background-color: transparent;
  border-bottom-color: #7957d5;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  color: #7957d5;
  padding-bottom: calc(0.5rem - 3px);
}

.navbar-content {
  flex-grow: 1;
  flex-shrink: 1;
}

.navbar-link:not(.is-arrowless) {
  padding-right: 2.5em;
}
.navbar-link:not(.is-arrowless)::after {
  border-color: #7957d5;
  margin-top: -0.375em;
  right: 1.125em;
}

.navbar-dropdown {
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}
.navbar-dropdown .navbar-item {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.navbar-divider {
  background-color: whitesmoke;
  border: none;
  display: none;
  height: 2px;
  margin: 0.5rem 0;
}

@media screen and (max-width: 1023px) {
  .navbar > .container {
    display: block;
  }

  .navbar-brand .navbar-item,
.navbar-tabs .navbar-item {
    align-items: center;
    display: flex;
  }

  .navbar-link::after {
    display: none;
  }

  .navbar-menu {
    background-color: white;
    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
    padding: 0.5rem 0;
  }
  .navbar-menu.is-active {
    display: block;
  }

  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
  }
  .navbar.is-fixed-bottom-touch {
    bottom: 0;
  }
  .navbar.is-fixed-bottom-touch.has-shadow {
    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);
  }
  .navbar.is-fixed-top-touch {
    top: 0;
  }
  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {
    -webkit-overflow-scrolling: touch;
    max-height: calc(100vh - 3.25rem);
    overflow: auto;
  }

  html.has-navbar-fixed-top-touch,
body.has-navbar-fixed-top-touch {
    padding-top: 3.25rem;
  }
  html.has-navbar-fixed-bottom-touch,
body.has-navbar-fixed-bottom-touch {
    padding-bottom: 3.25rem;
  }
}
@media screen and (min-width: 1024px) {
  .navbar,
.navbar-menu,
.navbar-start,
.navbar-end {
    align-items: stretch;
    display: flex;
  }

  .navbar {
    min-height: 3.25rem;
  }
  .navbar.is-spaced {
    padding: 1rem 2rem;
  }
  .navbar.is-spaced .navbar-start,
.navbar.is-spaced .navbar-end {
    align-items: center;
  }
  .navbar.is-spaced a.navbar-item,
.navbar.is-spaced .navbar-link {
    border-radius: 4px;
  }
  .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,
.navbar.is-transparent .navbar-link:focus,
.navbar.is-transparent .navbar-link:hover,
.navbar.is-transparent .navbar-link.is-active {
    background-color: transparent !important;
  }
  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {
    background-color: transparent !important;
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {
    background-color: whitesmoke;
    color: #0a0a0a;
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: #7957d5;
  }

  .navbar-burger {
    display: none;
  }

  .navbar-item,
.navbar-link {
    align-items: center;
    display: flex;
  }

  .navbar-item.has-dropdown {
    align-items: stretch;
  }
  .navbar-item.has-dropdown-up .navbar-link::after {
    transform: rotate(135deg) translate(0.25em, -0.25em);
  }
  .navbar-item.has-dropdown-up .navbar-dropdown {
    border-bottom: 2px solid #dbdbdb;
    border-radius: 6px 6px 0 0;
    border-top: none;
    bottom: 100%;
    box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);
    top: auto;
  }
  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {
    display: block;
  }
  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .navbar-menu {
    flex-grow: 1;
    flex-shrink: 0;
  }

  .navbar-start {
    justify-content: flex-start;
    margin-right: auto;
  }

  .navbar-end {
    justify-content: flex-end;
    margin-left: auto;
  }

  .navbar-dropdown {
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top: 2px solid #dbdbdb;
    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);
    display: none;
    font-size: 0.875rem;
    left: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: 20;
  }
  .navbar-dropdown .navbar-item {
    padding: 0.375rem 1rem;
    white-space: nowrap;
  }
  .navbar-dropdown a.navbar-item {
    padding-right: 3rem;
  }
  .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {
    background-color: whitesmoke;
    color: #0a0a0a;
  }
  .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: #7957d5;
  }
  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {
    border-radius: 6px;
    border-top: none;
    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    display: block;
    opacity: 0;
    pointer-events: none;
    top: calc(100% + (-4px));
    transform: translateY(-5px);
    transition-duration: 86ms;
    transition-property: opacity, transform;
  }
  .navbar-dropdown.is-right {
    left: auto;
    right: 0;
  }

  .navbar-divider {
    display: block;
  }

  .navbar > .container .navbar-brand,
.container > .navbar .navbar-brand {
    margin-left: -0.75rem;
  }
  .navbar > .container .navbar-menu,
.container > .navbar .navbar-menu {
    margin-right: -0.75rem;
  }

  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
  }
  .navbar.is-fixed-bottom-desktop {
    bottom: 0;
  }
  .navbar.is-fixed-bottom-desktop.has-shadow {
    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);
  }
  .navbar.is-fixed-top-desktop {
    top: 0;
  }

  html.has-navbar-fixed-top-desktop,
body.has-navbar-fixed-top-desktop {
    padding-top: 3.25rem;
  }
  html.has-navbar-fixed-bottom-desktop,
body.has-navbar-fixed-bottom-desktop {
    padding-bottom: 3.25rem;
  }
  html.has-spaced-navbar-fixed-top,
body.has-spaced-navbar-fixed-top {
    padding-top: 5.25rem;
  }
  html.has-spaced-navbar-fixed-bottom,
body.has-spaced-navbar-fixed-bottom {
    padding-bottom: 5.25rem;
  }

  a.navbar-item.is-active,
.navbar-link.is-active {
    color: #0a0a0a;
  }
  a.navbar-item.is-active:not(:focus):not(:hover),
.navbar-link.is-active:not(:focus):not(:hover) {
    background-color: transparent;
  }

  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #fafafa;
  }
}
.hero.is-fullheight-with-navbar {
  min-height: calc(100vh - 3.25rem);
}

.pagination {
  font-size: 1rem;
  margin: -0.25rem;
}
.pagination.is-small {
  font-size: 0.75rem;
}
.pagination.is-medium {
  font-size: 1.25rem;
}
.pagination.is-large {
  font-size: 1.5rem;
}
.pagination.is-rounded .pagination-previous,
.pagination.is-rounded .pagination-next {
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 290486px;
}
.pagination.is-rounded .pagination-link {
  border-radius: 290486px;
}

.pagination,
.pagination-list {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
}

.pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis {
  font-size: 1em;
  justify-content: center;
  margin: 0.25rem;
  padding-left: 0.5em;
  padding-right: 0.5em;
  text-align: center;
}

.pagination-previous,
.pagination-next,
.pagination-link {
  border-color: #dbdbdb;
  color: #363636;
  min-width: 2.5em;
}
.pagination-previous:hover,
.pagination-next:hover,
.pagination-link:hover {
  border-color: #b5b5b5;
  color: #363636;
}
.pagination-previous:focus,
.pagination-next:focus,
.pagination-link:focus {
  border-color: #7957d5;
}
.pagination-previous:active,
.pagination-next:active,
.pagination-link:active {
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
}
.pagination-previous[disabled],
.pagination-next[disabled],
.pagination-link[disabled] {
  background-color: #dbdbdb;
  border-color: #dbdbdb;
  box-shadow: none;
  color: #7a7a7a;
  opacity: 0.5;
}

.pagination-previous,
.pagination-next {
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
}

.pagination-link.is-current {
  background-color: #7957d5;
  border-color: #7957d5;
  color: #fff;
}

.pagination-ellipsis {
  color: #b5b5b5;
  pointer-events: none;
}

.pagination-list {
  flex-wrap: wrap;
}
.pagination-list li {
  list-style: none;
}

@media screen and (max-width: 768px) {
  .pagination {
    flex-wrap: wrap;
  }

  .pagination-previous,
.pagination-next {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .pagination-list li {
    flex-grow: 1;
    flex-shrink: 1;
  }
}
@media screen and (min-width: 769px), print {
  .pagination-list {
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: flex-start;
    order: 1;
  }

  .pagination-previous {
    order: 2;
  }

  .pagination-next {
    order: 3;
  }

  .pagination {
    justify-content: space-between;
  }
  .pagination.is-centered .pagination-previous {
    order: 1;
  }
  .pagination.is-centered .pagination-list {
    justify-content: center;
    order: 2;
  }
  .pagination.is-centered .pagination-next {
    order: 3;
  }
  .pagination.is-right .pagination-previous {
    order: 1;
  }
  .pagination.is-right .pagination-next {
    order: 2;
  }
  .pagination.is-right .pagination-list {
    justify-content: flex-end;
    order: 3;
  }
}
.panel {
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  font-size: 1rem;
}
.panel:not(:last-child) {
  margin-bottom: 1.5rem;
}
.panel.is-white .panel-heading {
  background-color: white;
  color: #0a0a0a;
}
.panel.is-white .panel-tabs a.is-active {
  border-bottom-color: white;
}
.panel.is-white .panel-block.is-active .panel-icon {
  color: white;
}
.panel.is-black .panel-heading {
  background-color: #0a0a0a;
  color: white;
}
.panel.is-black .panel-tabs a.is-active {
  border-bottom-color: #0a0a0a;
}
.panel.is-black .panel-block.is-active .panel-icon {
  color: #0a0a0a;
}
.panel.is-light .panel-heading {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.panel.is-light .panel-tabs a.is-active {
  border-bottom-color: whitesmoke;
}
.panel.is-light .panel-block.is-active .panel-icon {
  color: whitesmoke;
}
.panel.is-dark .panel-heading {
  background-color: #363636;
  color: #fff;
}
.panel.is-dark .panel-tabs a.is-active {
  border-bottom-color: #363636;
}
.panel.is-dark .panel-block.is-active .panel-icon {
  color: #363636;
}
.panel.is-primary .panel-heading {
  background-color: #7957d5;
  color: #fff;
}
.panel.is-primary .panel-tabs a.is-active {
  border-bottom-color: #7957d5;
}
.panel.is-primary .panel-block.is-active .panel-icon {
  color: #7957d5;
}
.panel.is-link .panel-heading {
  background-color: #7957d5;
  color: #fff;
}
.panel.is-link .panel-tabs a.is-active {
  border-bottom-color: #7957d5;
}
.panel.is-link .panel-block.is-active .panel-icon {
  color: #7957d5;
}
.panel.is-info .panel-heading {
  background-color: #167df0;
  color: #fff;
}
.panel.is-info .panel-tabs a.is-active {
  border-bottom-color: #167df0;
}
.panel.is-info .panel-block.is-active .panel-icon {
  color: #167df0;
}
.panel.is-success .panel-heading {
  background-color: #48c774;
  color: #fff;
}
.panel.is-success .panel-tabs a.is-active {
  border-bottom-color: #48c774;
}
.panel.is-success .panel-block.is-active .panel-icon {
  color: #48c774;
}
.panel.is-warning .panel-heading {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}
.panel.is-warning .panel-tabs a.is-active {
  border-bottom-color: #ffdd57;
}
.panel.is-warning .panel-block.is-active .panel-icon {
  color: #ffdd57;
}
.panel.is-danger .panel-heading {
  background-color: #f14668;
  color: #fff;
}
.panel.is-danger .panel-tabs a.is-active {
  border-bottom-color: #f14668;
}
.panel.is-danger .panel-block.is-active .panel-icon {
  color: #f14668;
}

.panel-tabs:not(:last-child),
.panel-block:not(:last-child) {
  border-bottom: 1px solid #ededed;
}

.panel-heading {
  background-color: #ededed;
  border-radius: 6px 6px 0 0;
  color: #363636;
  font-size: 1.25em;
  font-weight: 700;
  line-height: 1.25;
  padding: 0.75em 1em;
}

.panel-tabs {
  align-items: flex-end;
  display: flex;
  font-size: 0.875em;
  justify-content: center;
}
.panel-tabs a {
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: -1px;
  padding: 0.5em;
}
.panel-tabs a.is-active {
  border-bottom-color: #4a4a4a;
  color: #363636;
}

.panel-list a {
  color: #4a4a4a;
}
.panel-list a:hover {
  color: #7957d5;
}

.panel-block {
  align-items: center;
  color: #363636;
  display: flex;
  justify-content: flex-start;
  padding: 0.5em 0.75em;
}
.panel-block input[type=checkbox] {
  margin-right: 0.75em;
}
.panel-block > .control {
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
}
.panel-block.is-wrapped {
  flex-wrap: wrap;
}
.panel-block.is-active {
  border-left-color: #7957d5;
  color: #363636;
}
.panel-block.is-active .panel-icon {
  color: #7957d5;
}
.panel-block:last-child {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

a.panel-block,
label.panel-block {
  cursor: pointer;
}
a.panel-block:hover,
label.panel-block:hover {
  background-color: whitesmoke;
}

.panel-icon {
  display: inline-block;
  font-size: 14px;
  height: 1em;
  line-height: 1em;
  text-align: center;
  vertical-align: top;
  width: 1em;
  color: #7a7a7a;
  margin-right: 0.75em;
}
.panel-icon .fa {
  font-size: inherit;
  line-height: inherit;
}

.tabs {
  -webkit-overflow-scrolling: touch;
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.tabs a {
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: #4a4a4a;
  display: flex;
  justify-content: center;
  margin-bottom: -1px;
  padding: 0.5em 1em;
  vertical-align: top;
}
.tabs a:hover {
  border-bottom-color: #363636;
  color: #363636;
}
.tabs li {
  display: block;
}
.tabs li.is-active a {
  border-bottom-color: #7957d5;
  color: #7957d5;
}
.tabs ul {
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
}
.tabs ul.is-left {
  padding-right: 0.75em;
}
.tabs ul.is-center {
  flex: none;
  justify-content: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
}
.tabs ul.is-right {
  justify-content: flex-end;
  padding-left: 0.75em;
}
.tabs .icon:first-child {
  margin-right: 0.5em;
}
.tabs .icon:last-child {
  margin-left: 0.5em;
}
.tabs.is-centered ul {
  justify-content: center;
}
.tabs.is-right ul {
  justify-content: flex-end;
}
.tabs.is-boxed a {
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}
.tabs.is-boxed a:hover {
  background-color: whitesmoke;
  border-bottom-color: #dbdbdb;
}
.tabs.is-boxed li.is-active a {
  background-color: white;
  border-color: #dbdbdb;
  border-bottom-color: transparent !important;
}
.tabs.is-fullwidth li {
  flex-grow: 1;
  flex-shrink: 0;
}
.tabs.is-toggle a {
  border-color: #dbdbdb;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0;
  position: relative;
}
.tabs.is-toggle a:hover {
  background-color: whitesmoke;
  border-color: #b5b5b5;
  z-index: 2;
}
.tabs.is-toggle li + li {
  margin-left: -1px;
}
.tabs.is-toggle li:first-child a {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.tabs.is-toggle li:last-child a {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.tabs.is-toggle li.is-active a {
  background-color: #7957d5;
  border-color: #7957d5;
  color: #fff;
  z-index: 1;
}
.tabs.is-toggle ul {
  border-bottom: none;
}
.tabs.is-toggle.is-toggle-rounded li:first-child a {
  border-bottom-left-radius: 290486px;
  border-top-left-radius: 290486px;
  padding-left: 1.25em;
}
.tabs.is-toggle.is-toggle-rounded li:last-child a {
  border-bottom-right-radius: 290486px;
  border-top-right-radius: 290486px;
  padding-right: 1.25em;
}
.tabs.is-small {
  font-size: 0.75rem;
}
.tabs.is-medium {
  font-size: 1.25rem;
}
.tabs.is-large {
  font-size: 1.5rem;
}

/* Bulma Grid */
.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}
.columns.is-mobile > .column.is-narrow {
  flex: none;
  width: unset;
}
.columns.is-mobile > .column.is-full {
  flex: none;
  width: 100%;
}
.columns.is-mobile > .column.is-three-quarters {
  flex: none;
  width: 75%;
}
.columns.is-mobile > .column.is-two-thirds {
  flex: none;
  width: 66.6666%;
}
.columns.is-mobile > .column.is-half {
  flex: none;
  width: 50%;
}
.columns.is-mobile > .column.is-one-third {
  flex: none;
  width: 33.3333%;
}
.columns.is-mobile > .column.is-one-quarter {
  flex: none;
  width: 25%;
}
.columns.is-mobile > .column.is-one-fifth {
  flex: none;
  width: 20%;
}
.columns.is-mobile > .column.is-two-fifths {
  flex: none;
  width: 40%;
}
.columns.is-mobile > .column.is-three-fifths {
  flex: none;
  width: 60%;
}
.columns.is-mobile > .column.is-four-fifths {
  flex: none;
  width: 80%;
}
.columns.is-mobile > .column.is-offset-three-quarters {
  margin-left: 75%;
}
.columns.is-mobile > .column.is-offset-two-thirds {
  margin-left: 66.6666%;
}
.columns.is-mobile > .column.is-offset-half {
  margin-left: 50%;
}
.columns.is-mobile > .column.is-offset-one-third {
  margin-left: 33.3333%;
}
.columns.is-mobile > .column.is-offset-one-quarter {
  margin-left: 25%;
}
.columns.is-mobile > .column.is-offset-one-fifth {
  margin-left: 20%;
}
.columns.is-mobile > .column.is-offset-two-fifths {
  margin-left: 40%;
}
.columns.is-mobile > .column.is-offset-three-fifths {
  margin-left: 60%;
}
.columns.is-mobile > .column.is-offset-four-fifths {
  margin-left: 80%;
}
.columns.is-mobile > .column.is-0 {
  flex: none;
  width: 0%;
}
.columns.is-mobile > .column.is-offset-0 {
  margin-left: 0%;
}
.columns.is-mobile > .column.is-1 {
  flex: none;
  width: 8.3333333333%;
}
.columns.is-mobile > .column.is-offset-1 {
  margin-left: 8.3333333333%;
}
.columns.is-mobile > .column.is-2 {
  flex: none;
  width: 16.6666666667%;
}
.columns.is-mobile > .column.is-offset-2 {
  margin-left: 16.6666666667%;
}
.columns.is-mobile > .column.is-3 {
  flex: none;
  width: 25%;
}
.columns.is-mobile > .column.is-offset-3 {
  margin-left: 25%;
}
.columns.is-mobile > .column.is-4 {
  flex: none;
  width: 33.3333333333%;
}
.columns.is-mobile > .column.is-offset-4 {
  margin-left: 33.3333333333%;
}
.columns.is-mobile > .column.is-5 {
  flex: none;
  width: 41.6666666667%;
}
.columns.is-mobile > .column.is-offset-5 {
  margin-left: 41.6666666667%;
}
.columns.is-mobile > .column.is-6 {
  flex: none;
  width: 50%;
}
.columns.is-mobile > .column.is-offset-6 {
  margin-left: 50%;
}
.columns.is-mobile > .column.is-7 {
  flex: none;
  width: 58.3333333333%;
}
.columns.is-mobile > .column.is-offset-7 {
  margin-left: 58.3333333333%;
}
.columns.is-mobile > .column.is-8 {
  flex: none;
  width: 66.6666666667%;
}
.columns.is-mobile > .column.is-offset-8 {
  margin-left: 66.6666666667%;
}
.columns.is-mobile > .column.is-9 {
  flex: none;
  width: 75%;
}
.columns.is-mobile > .column.is-offset-9 {
  margin-left: 75%;
}
.columns.is-mobile > .column.is-10 {
  flex: none;
  width: 83.3333333333%;
}
.columns.is-mobile > .column.is-offset-10 {
  margin-left: 83.3333333333%;
}
.columns.is-mobile > .column.is-11 {
  flex: none;
  width: 91.6666666667%;
}
.columns.is-mobile > .column.is-offset-11 {
  margin-left: 91.6666666667%;
}
.columns.is-mobile > .column.is-12 {
  flex: none;
  width: 100%;
}
.columns.is-mobile > .column.is-offset-12 {
  margin-left: 100%;
}
@media screen and (max-width: 768px) {
  .column.is-narrow-mobile {
    flex: none;
    width: unset;
  }
  .column.is-full-mobile {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-mobile {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-mobile {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-mobile {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-mobile {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-mobile {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-mobile {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-mobile {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-mobile {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-mobile {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-mobile {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-mobile {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-mobile {
    margin-left: 50%;
  }
  .column.is-offset-one-third-mobile {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-mobile {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-mobile {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-mobile {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-mobile {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-mobile {
    margin-left: 80%;
  }
  .column.is-0-mobile {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-mobile {
    margin-left: 0%;
  }
  .column.is-1-mobile {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1-mobile {
    margin-left: 8.3333333333%;
  }
  .column.is-2-mobile {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2-mobile {
    margin-left: 16.6666666667%;
  }
  .column.is-3-mobile {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-mobile {
    margin-left: 25%;
  }
  .column.is-4-mobile {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4-mobile {
    margin-left: 33.3333333333%;
  }
  .column.is-5-mobile {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5-mobile {
    margin-left: 41.6666666667%;
  }
  .column.is-6-mobile {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-mobile {
    margin-left: 50%;
  }
  .column.is-7-mobile {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7-mobile {
    margin-left: 58.3333333333%;
  }
  .column.is-8-mobile {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8-mobile {
    margin-left: 66.6666666667%;
  }
  .column.is-9-mobile {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-mobile {
    margin-left: 75%;
  }
  .column.is-10-mobile {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10-mobile {
    margin-left: 83.3333333333%;
  }
  .column.is-11-mobile {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11-mobile {
    margin-left: 91.6666666667%;
  }
  .column.is-12-mobile {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-mobile {
    margin-left: 100%;
  }
}
@media screen and (min-width: 769px), print {
  .column.is-narrow, .column.is-narrow-tablet {
    flex: none;
    width: unset;
  }
  .column.is-full, .column.is-full-tablet {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters, .column.is-three-quarters-tablet {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds, .column.is-two-thirds-tablet {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half, .column.is-half-tablet {
    flex: none;
    width: 50%;
  }
  .column.is-one-third, .column.is-one-third-tablet {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter, .column.is-one-quarter-tablet {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth, .column.is-one-fifth-tablet {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths, .column.is-two-fifths-tablet {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths, .column.is-three-fifths-tablet {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths, .column.is-four-fifths-tablet {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {
    margin-left: 66.6666%;
  }
  .column.is-offset-half, .column.is-offset-half-tablet {
    margin-left: 50%;
  }
  .column.is-offset-one-third, .column.is-offset-one-third-tablet {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {
    margin-left: 80%;
  }
  .column.is-0, .column.is-0-tablet {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0, .column.is-offset-0-tablet {
    margin-left: 0%;
  }
  .column.is-1, .column.is-1-tablet {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1, .column.is-offset-1-tablet {
    margin-left: 8.3333333333%;
  }
  .column.is-2, .column.is-2-tablet {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2, .column.is-offset-2-tablet {
    margin-left: 16.6666666667%;
  }
  .column.is-3, .column.is-3-tablet {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3, .column.is-offset-3-tablet {
    margin-left: 25%;
  }
  .column.is-4, .column.is-4-tablet {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4, .column.is-offset-4-tablet {
    margin-left: 33.3333333333%;
  }
  .column.is-5, .column.is-5-tablet {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5, .column.is-offset-5-tablet {
    margin-left: 41.6666666667%;
  }
  .column.is-6, .column.is-6-tablet {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6, .column.is-offset-6-tablet {
    margin-left: 50%;
  }
  .column.is-7, .column.is-7-tablet {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7, .column.is-offset-7-tablet {
    margin-left: 58.3333333333%;
  }
  .column.is-8, .column.is-8-tablet {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8, .column.is-offset-8-tablet {
    margin-left: 66.6666666667%;
  }
  .column.is-9, .column.is-9-tablet {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9, .column.is-offset-9-tablet {
    margin-left: 75%;
  }
  .column.is-10, .column.is-10-tablet {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10, .column.is-offset-10-tablet {
    margin-left: 83.3333333333%;
  }
  .column.is-11, .column.is-11-tablet {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11, .column.is-offset-11-tablet {
    margin-left: 91.6666666667%;
  }
  .column.is-12, .column.is-12-tablet {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12, .column.is-offset-12-tablet {
    margin-left: 100%;
  }
}
@media screen and (max-width: 1023px) {
  .column.is-narrow-touch {
    flex: none;
    width: unset;
  }
  .column.is-full-touch {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-touch {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-touch {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-touch {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-touch {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-touch {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-touch {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-touch {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-touch {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-touch {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-touch {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-touch {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-touch {
    margin-left: 50%;
  }
  .column.is-offset-one-third-touch {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-touch {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-touch {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-touch {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-touch {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-touch {
    margin-left: 80%;
  }
  .column.is-0-touch {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-touch {
    margin-left: 0%;
  }
  .column.is-1-touch {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1-touch {
    margin-left: 8.3333333333%;
  }
  .column.is-2-touch {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2-touch {
    margin-left: 16.6666666667%;
  }
  .column.is-3-touch {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-touch {
    margin-left: 25%;
  }
  .column.is-4-touch {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4-touch {
    margin-left: 33.3333333333%;
  }
  .column.is-5-touch {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5-touch {
    margin-left: 41.6666666667%;
  }
  .column.is-6-touch {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-touch {
    margin-left: 50%;
  }
  .column.is-7-touch {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7-touch {
    margin-left: 58.3333333333%;
  }
  .column.is-8-touch {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8-touch {
    margin-left: 66.6666666667%;
  }
  .column.is-9-touch {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-touch {
    margin-left: 75%;
  }
  .column.is-10-touch {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10-touch {
    margin-left: 83.3333333333%;
  }
  .column.is-11-touch {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11-touch {
    margin-left: 91.6666666667%;
  }
  .column.is-12-touch {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-touch {
    margin-left: 100%;
  }
}
@media screen and (min-width: 1024px) {
  .column.is-narrow-desktop {
    flex: none;
    width: unset;
  }
  .column.is-full-desktop {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-desktop {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-desktop {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-desktop {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-desktop {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-desktop {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-desktop {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-desktop {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-desktop {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-desktop {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-desktop {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-desktop {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-desktop {
    margin-left: 50%;
  }
  .column.is-offset-one-third-desktop {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-desktop {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-desktop {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-desktop {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-desktop {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-desktop {
    margin-left: 80%;
  }
  .column.is-0-desktop {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-desktop {
    margin-left: 0%;
  }
  .column.is-1-desktop {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1-desktop {
    margin-left: 8.3333333333%;
  }
  .column.is-2-desktop {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2-desktop {
    margin-left: 16.6666666667%;
  }
  .column.is-3-desktop {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-desktop {
    margin-left: 25%;
  }
  .column.is-4-desktop {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4-desktop {
    margin-left: 33.3333333333%;
  }
  .column.is-5-desktop {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5-desktop {
    margin-left: 41.6666666667%;
  }
  .column.is-6-desktop {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-desktop {
    margin-left: 50%;
  }
  .column.is-7-desktop {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7-desktop {
    margin-left: 58.3333333333%;
  }
  .column.is-8-desktop {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8-desktop {
    margin-left: 66.6666666667%;
  }
  .column.is-9-desktop {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-desktop {
    margin-left: 75%;
  }
  .column.is-10-desktop {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10-desktop {
    margin-left: 83.3333333333%;
  }
  .column.is-11-desktop {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11-desktop {
    margin-left: 91.6666666667%;
  }
  .column.is-12-desktop {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-desktop {
    margin-left: 100%;
  }
}
@media screen and (min-width: 1216px) {
  .column.is-narrow-widescreen {
    flex: none;
    width: unset;
  }
  .column.is-full-widescreen {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-widescreen {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-widescreen {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-widescreen {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-widescreen {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-widescreen {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-widescreen {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-widescreen {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-widescreen {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-widescreen {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-widescreen {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-widescreen {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-widescreen {
    margin-left: 50%;
  }
  .column.is-offset-one-third-widescreen {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-widescreen {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-widescreen {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-widescreen {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-widescreen {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-widescreen {
    margin-left: 80%;
  }
  .column.is-0-widescreen {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-widescreen {
    margin-left: 0%;
  }
  .column.is-1-widescreen {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1-widescreen {
    margin-left: 8.3333333333%;
  }
  .column.is-2-widescreen {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2-widescreen {
    margin-left: 16.6666666667%;
  }
  .column.is-3-widescreen {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-widescreen {
    margin-left: 25%;
  }
  .column.is-4-widescreen {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4-widescreen {
    margin-left: 33.3333333333%;
  }
  .column.is-5-widescreen {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5-widescreen {
    margin-left: 41.6666666667%;
  }
  .column.is-6-widescreen {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-widescreen {
    margin-left: 50%;
  }
  .column.is-7-widescreen {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7-widescreen {
    margin-left: 58.3333333333%;
  }
  .column.is-8-widescreen {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8-widescreen {
    margin-left: 66.6666666667%;
  }
  .column.is-9-widescreen {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-widescreen {
    margin-left: 75%;
  }
  .column.is-10-widescreen {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10-widescreen {
    margin-left: 83.3333333333%;
  }
  .column.is-11-widescreen {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11-widescreen {
    margin-left: 91.6666666667%;
  }
  .column.is-12-widescreen {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-widescreen {
    margin-left: 100%;
  }
}
@media screen and (min-width: 1408px) {
  .column.is-narrow-fullhd {
    flex: none;
    width: unset;
  }
  .column.is-full-fullhd {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-fullhd {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-fullhd {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-fullhd {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-fullhd {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-fullhd {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-fullhd {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-fullhd {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-fullhd {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-fullhd {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-fullhd {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-fullhd {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-fullhd {
    margin-left: 50%;
  }
  .column.is-offset-one-third-fullhd {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-fullhd {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-fullhd {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-fullhd {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-fullhd {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-fullhd {
    margin-left: 80%;
  }
  .column.is-0-fullhd {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-fullhd {
    margin-left: 0%;
  }
  .column.is-1-fullhd {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1-fullhd {
    margin-left: 8.3333333333%;
  }
  .column.is-2-fullhd {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2-fullhd {
    margin-left: 16.6666666667%;
  }
  .column.is-3-fullhd {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-fullhd {
    margin-left: 25%;
  }
  .column.is-4-fullhd {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4-fullhd {
    margin-left: 33.3333333333%;
  }
  .column.is-5-fullhd {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5-fullhd {
    margin-left: 41.6666666667%;
  }
  .column.is-6-fullhd {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-fullhd {
    margin-left: 50%;
  }
  .column.is-7-fullhd {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7-fullhd {
    margin-left: 58.3333333333%;
  }
  .column.is-8-fullhd {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8-fullhd {
    margin-left: 66.6666666667%;
  }
  .column.is-9-fullhd {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-fullhd {
    margin-left: 75%;
  }
  .column.is-10-fullhd {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10-fullhd {
    margin-left: 83.3333333333%;
  }
  .column.is-11-fullhd {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11-fullhd {
    margin-left: 91.6666666667%;
  }
  .column.is-12-fullhd {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-fullhd {
    margin-left: 100%;
  }
}

.columns {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
}
.columns:last-child {
  margin-bottom: -0.75rem;
}
.columns:not(:last-child) {
  margin-bottom: calc(1.5rem - 0.75rem);
}
.columns.is-centered {
  justify-content: center;
}
.columns.is-gapless {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
}
.columns.is-gapless > .column {
  margin: 0;
  padding: 0 !important;
}
.columns.is-gapless:not(:last-child) {
  margin-bottom: 1.5rem;
}
.columns.is-gapless:last-child {
  margin-bottom: 0;
}
.columns.is-mobile {
  display: flex;
}
.columns.is-multiline {
  flex-wrap: wrap;
}
.columns.is-vcentered {
  align-items: center;
}
@media screen and (min-width: 769px), print {
  .columns:not(.is-desktop) {
    display: flex;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-desktop {
    display: flex;
  }
}

.columns.is-variable {
  --columnGap: 0.75rem;
  margin-left: calc(-1 * var(--columnGap));
  margin-right: calc(-1 * var(--columnGap));
}
.columns.is-variable > .column {
  padding-left: var(--columnGap);
  padding-right: var(--columnGap);
}
.columns.is-variable.is-0 {
  --columnGap: 0rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-0-mobile {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-0-tablet {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-0-tablet-only {
    --columnGap: 0rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-0-touch {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-0-desktop {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-0-desktop-only {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-0-widescreen {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-0-widescreen-only {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-0-fullhd {
    --columnGap: 0rem;
  }
}
.columns.is-variable.is-1 {
  --columnGap: 0.25rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-1-mobile {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-1-tablet {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-1-tablet-only {
    --columnGap: 0.25rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-1-touch {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-1-desktop {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-1-desktop-only {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-1-widescreen {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-1-widescreen-only {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-1-fullhd {
    --columnGap: 0.25rem;
  }
}
.columns.is-variable.is-2 {
  --columnGap: 0.5rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-2-mobile {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-2-tablet {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-2-tablet-only {
    --columnGap: 0.5rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-2-touch {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-2-desktop {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-2-desktop-only {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-2-widescreen {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-2-widescreen-only {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-2-fullhd {
    --columnGap: 0.5rem;
  }
}
.columns.is-variable.is-3 {
  --columnGap: 0.75rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-3-mobile {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-3-tablet {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-3-tablet-only {
    --columnGap: 0.75rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-3-touch {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-3-desktop {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-3-desktop-only {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-3-widescreen {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-3-widescreen-only {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-3-fullhd {
    --columnGap: 0.75rem;
  }
}
.columns.is-variable.is-4 {
  --columnGap: 1rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-4-mobile {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-4-tablet {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-4-tablet-only {
    --columnGap: 1rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-4-touch {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-4-desktop {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-4-desktop-only {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-4-widescreen {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-4-widescreen-only {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-4-fullhd {
    --columnGap: 1rem;
  }
}
.columns.is-variable.is-5 {
  --columnGap: 1.25rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-5-mobile {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-5-tablet {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-5-tablet-only {
    --columnGap: 1.25rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-5-touch {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-5-desktop {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-5-desktop-only {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-5-widescreen {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-5-widescreen-only {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-5-fullhd {
    --columnGap: 1.25rem;
  }
}
.columns.is-variable.is-6 {
  --columnGap: 1.5rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-6-mobile {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-6-tablet {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-6-tablet-only {
    --columnGap: 1.5rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-6-touch {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-6-desktop {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-6-desktop-only {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-6-widescreen {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-6-widescreen-only {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-6-fullhd {
    --columnGap: 1.5rem;
  }
}
.columns.is-variable.is-7 {
  --columnGap: 1.75rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-7-mobile {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-7-tablet {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-7-tablet-only {
    --columnGap: 1.75rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-7-touch {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-7-desktop {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-7-desktop-only {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-7-widescreen {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-7-widescreen-only {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-7-fullhd {
    --columnGap: 1.75rem;
  }
}
.columns.is-variable.is-8 {
  --columnGap: 2rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-8-mobile {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-8-tablet {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-8-tablet-only {
    --columnGap: 2rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-8-touch {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-8-desktop {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-8-desktop-only {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-8-widescreen {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-8-widescreen-only {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-8-fullhd {
    --columnGap: 2rem;
  }
}

.tile {
  align-items: stretch;
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: min-content;
}
.tile.is-ancestor {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
}
.tile.is-ancestor:last-child {
  margin-bottom: -0.75rem;
}
.tile.is-ancestor:not(:last-child) {
  margin-bottom: 0.75rem;
}
.tile.is-child {
  margin: 0 !important;
}
.tile.is-parent {
  padding: 0.75rem;
}
.tile.is-vertical {
  flex-direction: column;
}
.tile.is-vertical > .tile.is-child:not(:last-child) {
  margin-bottom: 1.5rem !important;
}
@media screen and (min-width: 769px), print {
  .tile:not(.is-child) {
    display: flex;
  }
  .tile.is-1 {
    flex: none;
    width: 8.3333333333%;
  }
  .tile.is-2 {
    flex: none;
    width: 16.6666666667%;
  }
  .tile.is-3 {
    flex: none;
    width: 25%;
  }
  .tile.is-4 {
    flex: none;
    width: 33.3333333333%;
  }
  .tile.is-5 {
    flex: none;
    width: 41.6666666667%;
  }
  .tile.is-6 {
    flex: none;
    width: 50%;
  }
  .tile.is-7 {
    flex: none;
    width: 58.3333333333%;
  }
  .tile.is-8 {
    flex: none;
    width: 66.6666666667%;
  }
  .tile.is-9 {
    flex: none;
    width: 75%;
  }
  .tile.is-10 {
    flex: none;
    width: 83.3333333333%;
  }
  .tile.is-11 {
    flex: none;
    width: 91.6666666667%;
  }
  .tile.is-12 {
    flex: none;
    width: 100%;
  }
}

/* Bulma Helpers */
.has-text-white {
  color: white !important;
}

a.has-text-white:hover, a.has-text-white:focus {
  color: #e6e6e6 !important;
}

.has-background-white {
  background-color: white !important;
}

.has-text-black {
  color: #0a0a0a !important;
}

a.has-text-black:hover, a.has-text-black:focus {
  color: black !important;
}

.has-background-black {
  background-color: #0a0a0a !important;
}

.has-text-light {
  color: whitesmoke !important;
}

a.has-text-light:hover, a.has-text-light:focus {
  color: #dbdbdb !important;
}

.has-background-light {
  background-color: whitesmoke !important;
}

.has-text-dark {
  color: #363636 !important;
}

a.has-text-dark:hover, a.has-text-dark:focus {
  color: #1c1c1c !important;
}

.has-background-dark {
  background-color: #363636 !important;
}

.has-text-primary {
  color: #7957d5 !important;
}

a.has-text-primary:hover, a.has-text-primary:focus {
  color: #5a32c7 !important;
}

.has-background-primary {
  background-color: #7957d5 !important;
}

.has-text-primary-light {
  color: #f2effb !important;
}

a.has-text-primary-light:hover, a.has-text-primary-light:focus {
  color: #d1c6f1 !important;
}

.has-background-primary-light {
  background-color: #f2effb !important;
}

.has-text-primary-dark {
  color: #552fbc !important;
}

a.has-text-primary-dark:hover, a.has-text-primary-dark:focus {
  color: #704bd2 !important;
}

.has-background-primary-dark {
  background-color: #552fbc !important;
}

.has-text-link {
  color: #7957d5 !important;
}

a.has-text-link:hover, a.has-text-link:focus {
  color: #5a32c7 !important;
}

.has-background-link {
  background-color: #7957d5 !important;
}

.has-text-link-light {
  color: #f2effb !important;
}

a.has-text-link-light:hover, a.has-text-link-light:focus {
  color: #d1c6f1 !important;
}

.has-background-link-light {
  background-color: #f2effb !important;
}

.has-text-link-dark {
  color: #552fbc !important;
}

a.has-text-link-dark:hover, a.has-text-link-dark:focus {
  color: #704bd2 !important;
}

.has-background-link-dark {
  background-color: #552fbc !important;
}

.has-text-info {
  color: #167df0 !important;
}

a.has-text-info:hover, a.has-text-info:focus {
  color: #0d64c6 !important;
}

.has-background-info {
  background-color: #167df0 !important;
}

.has-text-info-light {
  color: #ecf4fe !important;
}

a.has-text-info-light:hover, a.has-text-info-light:focus {
  color: #bcdafb !important;
}

.has-background-info-light {
  background-color: #ecf4fe !important;
}

.has-text-info-dark {
  color: #0d68ce !important;
}

a.has-text-info-dark:hover, a.has-text-info-dark:focus {
  color: #1e81f1 !important;
}

.has-background-info-dark {
  background-color: #0d68ce !important;
}

.has-text-success {
  color: #48c774 !important;
}

a.has-text-success:hover, a.has-text-success:focus {
  color: #34a85c !important;
}

.has-background-success {
  background-color: #48c774 !important;
}

.has-text-success-light {
  color: #effaf3 !important;
}

a.has-text-success-light:hover, a.has-text-success-light:focus {
  color: #c8eed6 !important;
}

.has-background-success-light {
  background-color: #effaf3 !important;
}

.has-text-success-dark {
  color: #257942 !important;
}

a.has-text-success-dark:hover, a.has-text-success-dark:focus {
  color: #31a058 !important;
}

.has-background-success-dark {
  background-color: #257942 !important;
}

.has-text-warning {
  color: #ffdd57 !important;
}

a.has-text-warning:hover, a.has-text-warning:focus {
  color: #ffd324 !important;
}

.has-background-warning {
  background-color: #ffdd57 !important;
}

.has-text-warning-light {
  color: #fffbeb !important;
}

a.has-text-warning-light:hover, a.has-text-warning-light:focus {
  color: #fff1b8 !important;
}

.has-background-warning-light {
  background-color: #fffbeb !important;
}

.has-text-warning-dark {
  color: #947600 !important;
}

a.has-text-warning-dark:hover, a.has-text-warning-dark:focus {
  color: #c79f00 !important;
}

.has-background-warning-dark {
  background-color: #947600 !important;
}

.has-text-danger {
  color: #f14668 !important;
}

a.has-text-danger:hover, a.has-text-danger:focus {
  color: #ee1742 !important;
}

.has-background-danger {
  background-color: #f14668 !important;
}

.has-text-danger-light {
  color: #feecf0 !important;
}

a.has-text-danger-light:hover, a.has-text-danger-light:focus {
  color: #fabdc9 !important;
}

.has-background-danger-light {
  background-color: #feecf0 !important;
}

.has-text-danger-dark {
  color: #cc0f35 !important;
}

a.has-text-danger-dark:hover, a.has-text-danger-dark:focus {
  color: #ee2049 !important;
}

.has-background-danger-dark {
  background-color: #cc0f35 !important;
}

.has-text-black-bis {
  color: #121212 !important;
}

.has-background-black-bis {
  background-color: #121212 !important;
}

.has-text-black-ter {
  color: #242424 !important;
}

.has-background-black-ter {
  background-color: #242424 !important;
}

.has-text-grey-darker {
  color: #363636 !important;
}

.has-background-grey-darker {
  background-color: #363636 !important;
}

.has-text-grey-dark {
  color: #4a4a4a !important;
}

.has-background-grey-dark {
  background-color: #4a4a4a !important;
}

.has-text-grey {
  color: #7a7a7a !important;
}

.has-background-grey {
  background-color: #7a7a7a !important;
}

.has-text-grey-light {
  color: #b5b5b5 !important;
}

.has-background-grey-light {
  background-color: #b5b5b5 !important;
}

.has-text-grey-lighter {
  color: #dbdbdb !important;
}

.has-background-grey-lighter {
  background-color: #dbdbdb !important;
}

.has-text-white-ter {
  color: whitesmoke !important;
}

.has-background-white-ter {
  background-color: whitesmoke !important;
}

.has-text-white-bis {
  color: #fafafa !important;
}

.has-background-white-bis {
  background-color: #fafafa !important;
}

.is-flex-direction-row {
  flex-direction: row !important;
}

.is-flex-direction-row-reverse {
  flex-direction: row-reverse !important;
}

.is-flex-direction-column {
  flex-direction: column !important;
}

.is-flex-direction-column-reverse {
  flex-direction: column-reverse !important;
}

.is-flex-wrap-nowrap {
  flex-wrap: nowrap !important;
}

.is-flex-wrap-wrap {
  flex-wrap: wrap !important;
}

.is-flex-wrap-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.is-justify-content-flex-start {
  justify-content: flex-start !important;
}

.is-justify-content-flex-end {
  justify-content: flex-end !important;
}

.is-justify-content-center {
  justify-content: center !important;
}

.is-justify-content-space-between {
  justify-content: space-between !important;
}

.is-justify-content-space-around {
  justify-content: space-around !important;
}

.is-justify-content-space-evenly {
  justify-content: space-evenly !important;
}

.is-justify-content-start {
  justify-content: start !important;
}

.is-justify-content-end {
  justify-content: end !important;
}

.is-justify-content-left {
  justify-content: left !important;
}

.is-justify-content-right {
  justify-content: right !important;
}

.is-align-content-flex-start {
  align-content: flex-start !important;
}

.is-align-content-flex-end {
  align-content: flex-end !important;
}

.is-align-content-center {
  align-content: center !important;
}

.is-align-content-space-between {
  align-content: space-between !important;
}

.is-align-content-space-around {
  align-content: space-around !important;
}

.is-align-content-space-evenly {
  align-content: space-evenly !important;
}

.is-align-content-stretch {
  align-content: stretch !important;
}

.is-align-content-start {
  align-content: start !important;
}

.is-align-content-end {
  align-content: end !important;
}

.is-align-content-baseline {
  align-content: baseline !important;
}

.is-align-items-stretch {
  align-items: stretch !important;
}

.is-align-items-flex-start {
  align-items: flex-start !important;
}

.is-align-items-flex-end {
  align-items: flex-end !important;
}

.is-align-items-center {
  align-items: center !important;
}

.is-align-items-baseline {
  align-items: baseline !important;
}

.is-align-items-start {
  align-items: start !important;
}

.is-align-items-end {
  align-items: end !important;
}

.is-align-items-self-start {
  align-items: self-start !important;
}

.is-align-items-self-end {
  align-items: self-end !important;
}

.is-align-self-auto {
  align-self: auto !important;
}

.is-align-self-flex-start {
  align-self: flex-start !important;
}

.is-align-self-flex-end {
  align-self: flex-end !important;
}

.is-align-self-center {
  align-self: center !important;
}

.is-align-self-baseline {
  align-self: baseline !important;
}

.is-align-self-stretch {
  align-self: stretch !important;
}

.is-flex-grow-0 {
  flex-grow: 0 !important;
}

.is-flex-grow-1 {
  flex-grow: 1 !important;
}

.is-flex-grow-2 {
  flex-grow: 2 !important;
}

.is-flex-grow-3 {
  flex-grow: 3 !important;
}

.is-flex-grow-4 {
  flex-grow: 4 !important;
}

.is-flex-grow-5 {
  flex-grow: 5 !important;
}

.is-flex-shrink-0 {
  flex-shrink: 0 !important;
}

.is-flex-shrink-1 {
  flex-shrink: 1 !important;
}

.is-flex-shrink-2 {
  flex-shrink: 2 !important;
}

.is-flex-shrink-3 {
  flex-shrink: 3 !important;
}

.is-flex-shrink-4 {
  flex-shrink: 4 !important;
}

.is-flex-shrink-5 {
  flex-shrink: 5 !important;
}

.is-clearfix::after {
  clear: both;
  content: " ";
  display: table;
}

.is-pulled-left {
  float: left !important;
}

.is-pulled-right {
  float: right !important;
}

.is-radiusless {
  border-radius: 0 !important;
}

.is-shadowless {
  box-shadow: none !important;
}

.is-clickable {
  cursor: pointer !important;
  pointer-events: all !important;
}

.is-clipped {
  overflow: hidden !important;
}

.is-relative {
  position: relative !important;
}

.is-marginless {
  margin: 0 !important;
}

.is-paddingless {
  padding: 0 !important;
}

.m-0 {
  margin: 0 !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mr-0 {
  margin-right: 0 !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.ml-0 {
  margin-left: 0 !important;
}

.mx-0 {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mr-1 {
  margin-right: 0.25rem !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1 {
  margin-left: 0.25rem !important;
}

.mx-1 {
  margin-left: 0.25rem !important;
  margin-right: 0.25rem !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mr-2 {
  margin-right: 0.5rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2 {
  margin-left: 0.5rem !important;
}

.mx-2 {
  margin-left: 0.5rem !important;
  margin-right: 0.5rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.m-3 {
  margin: 0.75rem !important;
}

.mt-3 {
  margin-top: 0.75rem !important;
}

.mr-3 {
  margin-right: 0.75rem !important;
}

.mb-3 {
  margin-bottom: 0.75rem !important;
}

.ml-3 {
  margin-left: 0.75rem !important;
}

.mx-3 {
  margin-left: 0.75rem !important;
  margin-right: 0.75rem !important;
}

.my-3 {
  margin-top: 0.75rem !important;
  margin-bottom: 0.75rem !important;
}

.m-4 {
  margin: 1rem !important;
}

.mt-4 {
  margin-top: 1rem !important;
}

.mr-4 {
  margin-right: 1rem !important;
}

.mb-4 {
  margin-bottom: 1rem !important;
}

.ml-4 {
  margin-left: 1rem !important;
}

.mx-4 {
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}

.my-4 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.m-5 {
  margin: 1.5rem !important;
}

.mt-5 {
  margin-top: 1.5rem !important;
}

.mr-5 {
  margin-right: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 1.5rem !important;
}

.ml-5 {
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-left: 1.5rem !important;
  margin-right: 1.5rem !important;
}

.my-5 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.m-6 {
  margin: 3rem !important;
}

.mt-6 {
  margin-top: 3rem !important;
}

.mr-6 {
  margin-right: 3rem !important;
}

.mb-6 {
  margin-bottom: 3rem !important;
}

.ml-6 {
  margin-left: 3rem !important;
}

.mx-6 {
  margin-left: 3rem !important;
  margin-right: 3rem !important;
}

.my-6 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pr-0 {
  padding-right: 0 !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pl-0 {
  padding-left: 0 !important;
}

.px-0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pr-1 {
  padding-right: 0.25rem !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1 {
  padding-left: 0.25rem !important;
}

.px-1 {
  padding-left: 0.25rem !important;
  padding-right: 0.25rem !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pr-2 {
  padding-right: 0.5rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2 {
  padding-left: 0.5rem !important;
}

.px-2 {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.p-3 {
  padding: 0.75rem !important;
}

.pt-3 {
  padding-top: 0.75rem !important;
}

.pr-3 {
  padding-right: 0.75rem !important;
}

.pb-3 {
  padding-bottom: 0.75rem !important;
}

.pl-3 {
  padding-left: 0.75rem !important;
}

.px-3 {
  padding-left: 0.75rem !important;
  padding-right: 0.75rem !important;
}

.py-3 {
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem !important;
}

.p-4 {
  padding: 1rem !important;
}

.pt-4 {
  padding-top: 1rem !important;
}

.pr-4 {
  padding-right: 1rem !important;
}

.pb-4 {
  padding-bottom: 1rem !important;
}

.pl-4 {
  padding-left: 1rem !important;
}

.px-4 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

.py-4 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.p-5 {
  padding: 1.5rem !important;
}

.pt-5 {
  padding-top: 1.5rem !important;
}

.pr-5 {
  padding-right: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 1.5rem !important;
}

.pl-5 {
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
}

.py-5 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.p-6 {
  padding: 3rem !important;
}

.pt-6 {
  padding-top: 3rem !important;
}

.pr-6 {
  padding-right: 3rem !important;
}

.pb-6 {
  padding-bottom: 3rem !important;
}

.pl-6 {
  padding-left: 3rem !important;
}

.px-6 {
  padding-left: 3rem !important;
  padding-right: 3rem !important;
}

.py-6 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.is-size-1 {
  font-size: 3rem !important;
}

.is-size-2 {
  font-size: 2.5rem !important;
}

.is-size-3 {
  font-size: 2rem !important;
}

.is-size-4 {
  font-size: 1.5rem !important;
}

.is-size-5 {
  font-size: 1.25rem !important;
}

.is-size-6 {
  font-size: 1rem !important;
}

.is-size-7 {
  font-size: 0.75rem !important;
}

@media screen and (max-width: 768px) {
  .is-size-1-mobile {
    font-size: 3rem !important;
  }

  .is-size-2-mobile {
    font-size: 2.5rem !important;
  }

  .is-size-3-mobile {
    font-size: 2rem !important;
  }

  .is-size-4-mobile {
    font-size: 1.5rem !important;
  }

  .is-size-5-mobile {
    font-size: 1.25rem !important;
  }

  .is-size-6-mobile {
    font-size: 1rem !important;
  }

  .is-size-7-mobile {
    font-size: 0.75rem !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-size-1-tablet {
    font-size: 3rem !important;
  }

  .is-size-2-tablet {
    font-size: 2.5rem !important;
  }

  .is-size-3-tablet {
    font-size: 2rem !important;
  }

  .is-size-4-tablet {
    font-size: 1.5rem !important;
  }

  .is-size-5-tablet {
    font-size: 1.25rem !important;
  }

  .is-size-6-tablet {
    font-size: 1rem !important;
  }

  .is-size-7-tablet {
    font-size: 0.75rem !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-size-1-touch {
    font-size: 3rem !important;
  }

  .is-size-2-touch {
    font-size: 2.5rem !important;
  }

  .is-size-3-touch {
    font-size: 2rem !important;
  }

  .is-size-4-touch {
    font-size: 1.5rem !important;
  }

  .is-size-5-touch {
    font-size: 1.25rem !important;
  }

  .is-size-6-touch {
    font-size: 1rem !important;
  }

  .is-size-7-touch {
    font-size: 0.75rem !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-size-1-desktop {
    font-size: 3rem !important;
  }

  .is-size-2-desktop {
    font-size: 2.5rem !important;
  }

  .is-size-3-desktop {
    font-size: 2rem !important;
  }

  .is-size-4-desktop {
    font-size: 1.5rem !important;
  }

  .is-size-5-desktop {
    font-size: 1.25rem !important;
  }

  .is-size-6-desktop {
    font-size: 1rem !important;
  }

  .is-size-7-desktop {
    font-size: 0.75rem !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-size-1-widescreen {
    font-size: 3rem !important;
  }

  .is-size-2-widescreen {
    font-size: 2.5rem !important;
  }

  .is-size-3-widescreen {
    font-size: 2rem !important;
  }

  .is-size-4-widescreen {
    font-size: 1.5rem !important;
  }

  .is-size-5-widescreen {
    font-size: 1.25rem !important;
  }

  .is-size-6-widescreen {
    font-size: 1rem !important;
  }

  .is-size-7-widescreen {
    font-size: 0.75rem !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-size-1-fullhd {
    font-size: 3rem !important;
  }

  .is-size-2-fullhd {
    font-size: 2.5rem !important;
  }

  .is-size-3-fullhd {
    font-size: 2rem !important;
  }

  .is-size-4-fullhd {
    font-size: 1.5rem !important;
  }

  .is-size-5-fullhd {
    font-size: 1.25rem !important;
  }

  .is-size-6-fullhd {
    font-size: 1rem !important;
  }

  .is-size-7-fullhd {
    font-size: 0.75rem !important;
  }
}
.has-text-centered {
  text-align: center !important;
}

.has-text-justified {
  text-align: justify !important;
}

.has-text-left {
  text-align: left !important;
}

.has-text-right {
  text-align: right !important;
}

@media screen and (max-width: 768px) {
  .has-text-centered-mobile {
    text-align: center !important;
  }
}
@media screen and (min-width: 769px), print {
  .has-text-centered-tablet {
    text-align: center !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-centered-tablet-only {
    text-align: center !important;
  }
}
@media screen and (max-width: 1023px) {
  .has-text-centered-touch {
    text-align: center !important;
  }
}
@media screen and (min-width: 1024px) {
  .has-text-centered-desktop {
    text-align: center !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-centered-desktop-only {
    text-align: center !important;
  }
}
@media screen and (min-width: 1216px) {
  .has-text-centered-widescreen {
    text-align: center !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-centered-widescreen-only {
    text-align: center !important;
  }
}
@media screen and (min-width: 1408px) {
  .has-text-centered-fullhd {
    text-align: center !important;
  }
}
@media screen and (max-width: 768px) {
  .has-text-justified-mobile {
    text-align: justify !important;
  }
}
@media screen and (min-width: 769px), print {
  .has-text-justified-tablet {
    text-align: justify !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-justified-tablet-only {
    text-align: justify !important;
  }
}
@media screen and (max-width: 1023px) {
  .has-text-justified-touch {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1024px) {
  .has-text-justified-desktop {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-justified-desktop-only {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1216px) {
  .has-text-justified-widescreen {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-justified-widescreen-only {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1408px) {
  .has-text-justified-fullhd {
    text-align: justify !important;
  }
}
@media screen and (max-width: 768px) {
  .has-text-left-mobile {
    text-align: left !important;
  }
}
@media screen and (min-width: 769px), print {
  .has-text-left-tablet {
    text-align: left !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-left-tablet-only {
    text-align: left !important;
  }
}
@media screen and (max-width: 1023px) {
  .has-text-left-touch {
    text-align: left !important;
  }
}
@media screen and (min-width: 1024px) {
  .has-text-left-desktop {
    text-align: left !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-left-desktop-only {
    text-align: left !important;
  }
}
@media screen and (min-width: 1216px) {
  .has-text-left-widescreen {
    text-align: left !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-left-widescreen-only {
    text-align: left !important;
  }
}
@media screen and (min-width: 1408px) {
  .has-text-left-fullhd {
    text-align: left !important;
  }
}
@media screen and (max-width: 768px) {
  .has-text-right-mobile {
    text-align: right !important;
  }
}
@media screen and (min-width: 769px), print {
  .has-text-right-tablet {
    text-align: right !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-right-tablet-only {
    text-align: right !important;
  }
}
@media screen and (max-width: 1023px) {
  .has-text-right-touch {
    text-align: right !important;
  }
}
@media screen and (min-width: 1024px) {
  .has-text-right-desktop {
    text-align: right !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-right-desktop-only {
    text-align: right !important;
  }
}
@media screen and (min-width: 1216px) {
  .has-text-right-widescreen {
    text-align: right !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-right-widescreen-only {
    text-align: right !important;
  }
}
@media screen and (min-width: 1408px) {
  .has-text-right-fullhd {
    text-align: right !important;
  }
}
.is-capitalized {
  text-transform: capitalize !important;
}

.is-lowercase {
  text-transform: lowercase !important;
}

.is-uppercase {
  text-transform: uppercase !important;
}

.is-italic {
  font-style: italic !important;
}

.has-text-weight-light {
  font-weight: 300 !important;
}

.has-text-weight-normal {
  font-weight: 400 !important;
}

.has-text-weight-medium {
  font-weight: 500 !important;
}

.has-text-weight-semibold {
  font-weight: 600 !important;
}

.has-text-weight-bold {
  font-weight: 700 !important;
}

.is-family-primary {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
}

.is-family-secondary {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
}

.is-family-sans-serif {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
}

.is-family-monospace {
  font-family: monospace !important;
}

.is-family-code {
  font-family: monospace !important;
}

.is-block {
  display: block !important;
}

@media screen and (max-width: 768px) {
  .is-block-mobile {
    display: block !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-block-tablet {
    display: block !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-block-tablet-only {
    display: block !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-block-touch {
    display: block !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-block-desktop {
    display: block !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-block-desktop-only {
    display: block !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-block-widescreen {
    display: block !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-block-widescreen-only {
    display: block !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-block-fullhd {
    display: block !important;
  }
}
.is-flex {
  display: flex !important;
}

@media screen and (max-width: 768px) {
  .is-flex-mobile {
    display: flex !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-flex-tablet {
    display: flex !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-flex-tablet-only {
    display: flex !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-flex-touch {
    display: flex !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-flex-desktop {
    display: flex !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-flex-desktop-only {
    display: flex !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-flex-widescreen {
    display: flex !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-flex-widescreen-only {
    display: flex !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-flex-fullhd {
    display: flex !important;
  }
}
.is-inline {
  display: inline !important;
}

@media screen and (max-width: 768px) {
  .is-inline-mobile {
    display: inline !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-inline-tablet {
    display: inline !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-inline-tablet-only {
    display: inline !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-inline-touch {
    display: inline !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-inline-desktop {
    display: inline !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-inline-desktop-only {
    display: inline !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-inline-widescreen {
    display: inline !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-inline-widescreen-only {
    display: inline !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-inline-fullhd {
    display: inline !important;
  }
}
.is-inline-block {
  display: inline-block !important;
}

@media screen and (max-width: 768px) {
  .is-inline-block-mobile {
    display: inline-block !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-inline-block-tablet {
    display: inline-block !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-inline-block-tablet-only {
    display: inline-block !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-inline-block-touch {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-inline-block-desktop {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-inline-block-desktop-only {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-inline-block-widescreen {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-inline-block-widescreen-only {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-inline-block-fullhd {
    display: inline-block !important;
  }
}
.is-inline-flex {
  display: inline-flex !important;
}

@media screen and (max-width: 768px) {
  .is-inline-flex-mobile {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-inline-flex-tablet {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-inline-flex-tablet-only {
    display: inline-flex !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-inline-flex-touch {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-inline-flex-desktop {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-inline-flex-desktop-only {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-inline-flex-widescreen {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-inline-flex-widescreen-only {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-inline-flex-fullhd {
    display: inline-flex !important;
  }
}
.is-hidden {
  display: none !important;
}

.is-sr-only {
  border: none !important;
  clip: rect(0, 0, 0, 0) !important;
  height: 0.01em !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 0.01em !important;
}

@media screen and (max-width: 768px) {
  .is-hidden-mobile {
    display: none !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-hidden-tablet {
    display: none !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-hidden-tablet-only {
    display: none !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-hidden-touch {
    display: none !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-hidden-desktop {
    display: none !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-hidden-desktop-only {
    display: none !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-hidden-widescreen {
    display: none !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-hidden-widescreen-only {
    display: none !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-hidden-fullhd {
    display: none !important;
  }
}
.is-invisible {
  visibility: hidden !important;
}

@media screen and (max-width: 768px) {
  .is-invisible-mobile {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-invisible-tablet {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-invisible-tablet-only {
    visibility: hidden !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-invisible-touch {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-invisible-desktop {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-invisible-desktop-only {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-invisible-widescreen {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-invisible-widescreen-only {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-invisible-fullhd {
    visibility: hidden !important;
  }
}
/* Bulma Layout */
.hero {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hero .navbar {
  background: none;
}
.hero .tabs ul {
  border-bottom: none;
}
.hero.is-white {
  background-color: white;
  color: #0a0a0a;
}
.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-white strong {
  color: inherit;
}
.hero.is-white .title {
  color: #0a0a0a;
}
.hero.is-white .subtitle {
  color: rgba(10, 10, 10, 0.9);
}
.hero.is-white .subtitle a:not(.button),
.hero.is-white .subtitle strong {
  color: #0a0a0a;
}
@media screen and (max-width: 1023px) {
  .hero.is-white .navbar-menu {
    background-color: white;
  }
}
.hero.is-white .navbar-item,
.hero.is-white .navbar-link {
  color: rgba(10, 10, 10, 0.7);
}
.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,
.hero.is-white .navbar-link:hover,
.hero.is-white .navbar-link.is-active {
  background-color: #f2f2f2;
  color: #0a0a0a;
}
.hero.is-white .tabs a {
  color: #0a0a0a;
  opacity: 0.9;
}
.hero.is-white .tabs a:hover {
  opacity: 1;
}
.hero.is-white .tabs li.is-active a {
  opacity: 1;
}
.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {
  color: #0a0a0a;
}
.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: white;
}
.hero.is-white.is-bold {
  background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-white.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);
  }
}
.hero.is-black {
  background-color: #0a0a0a;
  color: white;
}
.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-black strong {
  color: inherit;
}
.hero.is-black .title {
  color: white;
}
.hero.is-black .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-black .subtitle a:not(.button),
.hero.is-black .subtitle strong {
  color: white;
}
@media screen and (max-width: 1023px) {
  .hero.is-black .navbar-menu {
    background-color: #0a0a0a;
  }
}
.hero.is-black .navbar-item,
.hero.is-black .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,
.hero.is-black .navbar-link:hover,
.hero.is-black .navbar-link.is-active {
  background-color: black;
  color: white;
}
.hero.is-black .tabs a {
  color: white;
  opacity: 0.9;
}
.hero.is-black .tabs a:hover {
  opacity: 1;
}
.hero.is-black .tabs li.is-active a {
  opacity: 1;
}
.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {
  color: white;
}
.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {
  background-color: white;
  border-color: white;
  color: #0a0a0a;
}
.hero.is-black.is-bold {
  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-black.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);
  }
}
.hero.is-light {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-light strong {
  color: inherit;
}
.hero.is-light .title {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light .subtitle {
  color: rgba(0, 0, 0, 0.9);
}
.hero.is-light .subtitle a:not(.button),
.hero.is-light .subtitle strong {
  color: rgba(0, 0, 0, 0.7);
}
@media screen and (max-width: 1023px) {
  .hero.is-light .navbar-menu {
    background-color: whitesmoke;
  }
}
.hero.is-light .navbar-item,
.hero.is-light .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,
.hero.is-light .navbar-link:hover,
.hero.is-light .navbar-link.is-active {
  background-color: #e8e8e8;
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light .tabs a {
  color: rgba(0, 0, 0, 0.7);
  opacity: 0.9;
}
.hero.is-light .tabs a:hover {
  opacity: 1;
}
.hero.is-light .tabs li.is-active a {
  opacity: 1;
}
.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
}
.hero.is-light.is-bold {
  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-light.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
  }
}
.hero.is-dark {
  background-color: #363636;
  color: #fff;
}
.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-dark strong {
  color: inherit;
}
.hero.is-dark .title {
  color: #fff;
}
.hero.is-dark .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-dark .subtitle a:not(.button),
.hero.is-dark .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-dark .navbar-menu {
    background-color: #363636;
  }
}
.hero.is-dark .navbar-item,
.hero.is-dark .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,
.hero.is-dark .navbar-link:hover,
.hero.is-dark .navbar-link.is-active {
  background-color: #292929;
  color: #fff;
}
.hero.is-dark .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-dark .tabs a:hover {
  opacity: 1;
}
.hero.is-dark .tabs li.is-active a {
  opacity: 1;
}
.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {
  color: #fff;
}
.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #363636;
}
.hero.is-dark.is-bold {
  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-dark.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);
  }
}
.hero.is-primary {
  background-color: #7957d5;
  color: #fff;
}
.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-primary strong {
  color: inherit;
}
.hero.is-primary .title {
  color: #fff;
}
.hero.is-primary .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-primary .subtitle a:not(.button),
.hero.is-primary .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-primary .navbar-menu {
    background-color: #7957d5;
  }
}
.hero.is-primary .navbar-item,
.hero.is-primary .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,
.hero.is-primary .navbar-link:hover,
.hero.is-primary .navbar-link.is-active {
  background-color: #6943d0;
  color: #fff;
}
.hero.is-primary .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-primary .tabs a:hover {
  opacity: 1;
}
.hero.is-primary .tabs li.is-active a {
  opacity: 1;
}
.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {
  color: #fff;
}
.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #7957d5;
}
.hero.is-primary.is-bold {
  background-image: linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-primary.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%);
  }
}
.hero.is-link {
  background-color: #7957d5;
  color: #fff;
}
.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-link strong {
  color: inherit;
}
.hero.is-link .title {
  color: #fff;
}
.hero.is-link .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-link .subtitle a:not(.button),
.hero.is-link .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-link .navbar-menu {
    background-color: #7957d5;
  }
}
.hero.is-link .navbar-item,
.hero.is-link .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,
.hero.is-link .navbar-link:hover,
.hero.is-link .navbar-link.is-active {
  background-color: #6943d0;
  color: #fff;
}
.hero.is-link .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-link .tabs a:hover {
  opacity: 1;
}
.hero.is-link .tabs li.is-active a {
  opacity: 1;
}
.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {
  color: #fff;
}
.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #7957d5;
}
.hero.is-link.is-bold {
  background-image: linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-link.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%);
  }
}
.hero.is-info {
  background-color: #167df0;
  color: #fff;
}
.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-info strong {
  color: inherit;
}
.hero.is-info .title {
  color: #fff;
}
.hero.is-info .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-info .subtitle a:not(.button),
.hero.is-info .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-info .navbar-menu {
    background-color: #167df0;
  }
}
.hero.is-info .navbar-item,
.hero.is-info .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,
.hero.is-info .navbar-link:hover,
.hero.is-info .navbar-link.is-active {
  background-color: #0e71de;
  color: #fff;
}
.hero.is-info .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-info .tabs a:hover {
  opacity: 1;
}
.hero.is-info .tabs li.is-active a {
  opacity: 1;
}
.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {
  color: #fff;
}
.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #167df0;
}
.hero.is-info.is-bold {
  background-image: linear-gradient(141deg, #0286d1 0%, #167df0 71%, #2868f7 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-info.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #0286d1 0%, #167df0 71%, #2868f7 100%);
  }
}
.hero.is-success {
  background-color: #48c774;
  color: #fff;
}
.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-success strong {
  color: inherit;
}
.hero.is-success .title {
  color: #fff;
}
.hero.is-success .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-success .subtitle a:not(.button),
.hero.is-success .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-success .navbar-menu {
    background-color: #48c774;
  }
}
.hero.is-success .navbar-item,
.hero.is-success .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,
.hero.is-success .navbar-link:hover,
.hero.is-success .navbar-link.is-active {
  background-color: #3abb67;
  color: #fff;
}
.hero.is-success .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-success .tabs a:hover {
  opacity: 1;
}
.hero.is-success .tabs li.is-active a {
  opacity: 1;
}
.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {
  color: #fff;
}
.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #48c774;
}
.hero.is-success.is-bold {
  background-image: linear-gradient(141deg, #29b342 0%, #48c774 71%, #56d296 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-success.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #29b342 0%, #48c774 71%, #56d296 100%);
  }
}
.hero.is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-warning strong {
  color: inherit;
}
.hero.is-warning .title {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning .subtitle {
  color: rgba(0, 0, 0, 0.9);
}
.hero.is-warning .subtitle a:not(.button),
.hero.is-warning .subtitle strong {
  color: rgba(0, 0, 0, 0.7);
}
@media screen and (max-width: 1023px) {
  .hero.is-warning .navbar-menu {
    background-color: #ffdd57;
  }
}
.hero.is-warning .navbar-item,
.hero.is-warning .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,
.hero.is-warning .navbar-link:hover,
.hero.is-warning .navbar-link.is-active {
  background-color: #ffd83d;
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning .tabs a {
  color: rgba(0, 0, 0, 0.7);
  opacity: 0.9;
}
.hero.is-warning .tabs a:hover {
  opacity: 1;
}
.hero.is-warning .tabs li.is-active a {
  opacity: 1;
}
.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: rgba(0, 0, 0, 0.7);
  color: #ffdd57;
}
.hero.is-warning.is-bold {
  background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-warning.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);
  }
}
.hero.is-danger {
  background-color: #f14668;
  color: #fff;
}
.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-danger strong {
  color: inherit;
}
.hero.is-danger .title {
  color: #fff;
}
.hero.is-danger .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-danger .subtitle a:not(.button),
.hero.is-danger .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-danger .navbar-menu {
    background-color: #f14668;
  }
}
.hero.is-danger .navbar-item,
.hero.is-danger .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,
.hero.is-danger .navbar-link:hover,
.hero.is-danger .navbar-link.is-active {
  background-color: #ef2e55;
  color: #fff;
}
.hero.is-danger .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-danger .tabs a:hover {
  opacity: 1;
}
.hero.is-danger .tabs li.is-active a {
  opacity: 1;
}
.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {
  color: #fff;
}
.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #f14668;
}
.hero.is-danger.is-bold {
  background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-danger.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);
  }
}
.hero.is-small .hero-body {
  padding: 1.5rem;
}
@media screen and (min-width: 769px), print {
  .hero.is-medium .hero-body {
    padding: 9rem 1.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .hero.is-large .hero-body {
    padding: 18rem 1.5rem;
  }
}
.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {
  align-items: center;
  display: flex;
}
.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {
  flex-grow: 1;
  flex-shrink: 1;
}
.hero.is-halfheight {
  min-height: 50vh;
}
.hero.is-fullheight {
  min-height: 100vh;
}

.hero-video {
  overflow: hidden;
}
.hero-video video {
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.hero-video.is-transparent {
  opacity: 0.3;
}
@media screen and (max-width: 768px) {
  .hero-video {
    display: none;
  }
}

.hero-buttons {
  margin-top: 1.5rem;
}
@media screen and (max-width: 768px) {
  .hero-buttons .button {
    display: flex;
  }
  .hero-buttons .button:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}
@media screen and (min-width: 769px), print {
  .hero-buttons {
    display: flex;
    justify-content: center;
  }
  .hero-buttons .button:not(:last-child) {
    margin-right: 1.5rem;
  }
}

.hero-head,
.hero-foot {
  flex-grow: 0;
  flex-shrink: 0;
}

.hero-body {
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
}

.section {
  padding: 3rem 1.5rem;
}
@media screen and (min-width: 1024px) {
  .section.is-medium {
    padding: 9rem 1.5rem;
  }
  .section.is-large {
    padding: 18rem 1.5rem;
  }
}

.footer {
  background-color: #fafafa;
  padding: 3rem 1.5rem 6rem;
}

.is-noscroll {
  position: fixed;
  overflow-y: hidden;
  width: 100%;
  bottom: 0;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.fadeOut {
  animation-name: fadeOut;
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}
.fadeOutDown {
  animation-name: fadeOutDown;
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.fadeOutUp {
  animation-name: fadeOutUp;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fadeIn {
  animation-name: fadeIn;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.fadeInDown {
  animation-name: fadeInDown;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}

/**
 * Vue Transitions
 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.zoom-in-enter-active,
.zoom-in-leave-active {
  transition: opacity 150ms ease-out;
}
.zoom-in-enter-active .animation-content,
.zoom-in-enter-active .animation-content,
.zoom-in-leave-active .animation-content,
.zoom-in-leave-active .animation-content {
  transition: transform 150ms ease-out;
}

.zoom-in-enter,
.zoom-in-leave-active {
  opacity: 0;
}
.zoom-in-enter .animation-content,
.zoom-in-enter .animation-content,
.zoom-in-leave-active .animation-content,
.zoom-in-leave-active .animation-content {
  transform: scale(0.95);
}

.zoom-out-enter-active,
.zoom-out-leave-active {
  transition: opacity 150ms ease-out;
}
.zoom-out-enter-active .animation-content,
.zoom-out-enter-active .animation-content,
.zoom-out-leave-active .animation-content,
.zoom-out-leave-active .animation-content {
  transition: transform 150ms ease-out;
}

.zoom-out-enter,
.zoom-out-leave-active {
  opacity: 0;
}
.zoom-out-enter .animation-content,
.zoom-out-enter .animation-content,
.zoom-out-leave-active .animation-content,
.zoom-out-leave-active .animation-content {
  transform: scale(1.05);
}

.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.slide-prev-leave-to, .slide-next-enter {
  transform: translate3d(-100%, 0, 0);
  position: absolute;
  width: 100%;
}

.slide-prev-enter, .slide-next-leave-to {
  transform: translate3d(100%, 0, 0);
  position: absolute;
  width: 100%;
}

.slide-down-enter-active,
.slide-down-leave-active,
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.slide-up-leave-to, .slide-down-enter {
  transform: translate3d(0, -100%, 0);
  position: absolute;
  height: 100%;
}

.slide-up-enter, .slide-down-leave-to {
  transform: translate3d(0, 100%, 0);
  position: absolute;
  height: 100%;
}

.slide-enter-active {
  transition: 150ms ease-out;
}

.slide-leave-active {
  transition: 150ms ease-out;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter, .slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

.autocomplete {
  position: relative;
}
.autocomplete .dropdown-menu {
  display: block;
  width: 100%;
}
.autocomplete .dropdown-menu.is-opened-top {
  top: auto;
  bottom: 100%;
}
.autocomplete .dropdown-content {
  overflow: auto;
  max-height: 200px;
}
.autocomplete .dropdown-item, .autocomplete .dropdown .dropdown-menu .has-link a, .dropdown .dropdown-menu .has-link .autocomplete a {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.autocomplete .dropdown-item.is-hovered, .autocomplete .dropdown .dropdown-menu .has-link a.is-hovered, .dropdown .dropdown-menu .has-link .autocomplete a.is-hovered {
  background: whitesmoke;
  color: #0a0a0a;
}
.autocomplete .dropdown-item.is-disabled, .autocomplete .dropdown .dropdown-menu .has-link a.is-disabled, .dropdown .dropdown-menu .has-link .autocomplete a.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.autocomplete.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}
.autocomplete.is-medium {
  font-size: 1.25rem;
}
.autocomplete.is-large {
  font-size: 1.5rem;
}

.carousel {
  min-height: 120px;
  position: relative;
}
.carousel.is-overlay {
  background-color: rgba(10, 10, 10, 0.86);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  max-height: 100vh;
  position: fixed;
  z-index: 40;
}
.carousel.is-overlay .carousel-item img {
  cursor: default;
}
.carousel.is-overlay .carousel-indicator.has-background {
  background: transparent;
}
.carousel .progress, .carousel .progress-wrapper.is-not-native {
  border-radius: 2px;
  height: 0.25rem;
  margin-bottom: 0;
}
.carousel .carousel-items {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
}
@media screen and (min-width: 769px), print {
  .carousel .carousel-items:hover .carousel-arrow.is-hovered {
    opacity: 1;
  }
}
.carousel .carousel-items .carousel-item {
  flex-shrink: 0;
  width: 100%;
}
.carousel .carousel-pause {
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0.15rem;
  z-index: 1;
}
.carousel .carousel-indicator {
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel .carousel-indicator.has-background {
  background: rgba(10, 10, 10, 0.5);
}
.carousel .carousel-indicator.has-custom {
  flex-wrap: nowrap;
  justify-content: flex-start;
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
  overflow-x: auto;
}
.carousel .carousel-indicator.has-custom.is-small .indicator-item {
  flex: 1 0 10%;
}
.carousel .carousel-indicator.has-custom.is-medium .indicator-item {
  flex: 1 0 16.66667%;
}
.carousel .carousel-indicator.is-inside {
  position: absolute;
}
.carousel .carousel-indicator.is-inside.is-bottom {
  bottom: 0;
}
.carousel .carousel-indicator.is-inside.is-top {
  top: 0;
}
.carousel .carousel-indicator .indicator-item:not(:last-child) {
  margin-right: 0.5rem;
}
.carousel .carousel-indicator .indicator-item.is-active .indicator-style,
.carousel .carousel-indicator .indicator-item .indicator-style:hover {
  background: #7957d5;
  border: 1px solid white;
}
.carousel .carousel-indicator .indicator-item .indicator-style {
  display: block;
  border: 1px solid #7957d5;
  background: white;
  outline: none;
  transition: 150ms ease-out;
}
.carousel .carousel-indicator .indicator-item .indicator-style.is-boxes {
  height: 10px;
  width: 10px;
}
.carousel .carousel-indicator .indicator-item .indicator-style.is-dots {
  border-radius: 290486px;
  height: 10px;
  width: 10px;
}
.carousel .carousel-indicator .indicator-item .indicator-style.is-lines {
  height: 5px;
  width: 25px;
}

.carousel-list {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.carousel-list.has-shadow {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}
@media screen and (min-width: 769px), print {
  .carousel-list:hover .carousel-arrow.is-hovered {
    opacity: 1;
  }
}
.carousel-list .carousel-slides {
  position: relative;
  display: flex;
  width: 100%;
}
.carousel-list .carousel-slides:not(.is-dragging) {
  transition: all 250ms ease-out 0s;
}
.carousel-list .carousel-slides.has-grayscale .carousel-slide img {
  filter: grayscale(100%);
}
.carousel-list .carousel-slides.has-grayscale .carousel-slide.is-active img {
  filter: grayscale(0%);
}
.carousel-list .carousel-slides.has-opacity .carousel-slide img {
  opacity: 0.25;
}
.carousel-list .carousel-slides.has-opacity .carousel-slide.is-active img {
  opacity: 1;
}
.carousel-list .carousel-slides .carousel-slide {
  border: 2px solid transparent;
  flex-shrink: 0;
}

.carousel-arrow {
  transition: 150ms ease-out;
}
.carousel-arrow.is-hovered {
  opacity: 0;
}
.carousel-arrow .icon {
  background: white;
  color: #7957d5;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 290486px;
  outline: 0;
}
.carousel-arrow .icon:hover {
  border: 1px solid #7957d5;
  opacity: 1;
}
.carousel-arrow .icon.has-icons-left, .carousel-arrow .icon.has-icons-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
.carousel-arrow .icon.has-icons-left {
  left: 1.5rem;
}
.carousel-arrow .icon.has-icons-right {
  right: 1.5rem;
}

.b-checkbox.checkbox {
  outline: none;
  display: inline-flex;
  align-items: center;
}
.b-checkbox.checkbox:not(.button) {
  margin-right: 0.5em;
}
.b-checkbox.checkbox:not(.button) + .checkbox:last-child {
  margin-right: 0;
}
.b-checkbox.checkbox input[type=checkbox] {
  position: absolute;
  left: 0;
  opacity: 0;
  outline: none;
  z-index: -1;
}
.b-checkbox.checkbox input[type=checkbox] + .check {
  width: 1.25em;
  height: 1.25em;
  flex-shrink: 0;
  border-radius: 4px;
  border: 2px solid #7a7a7a;
  transition: background 150ms ease-out;
  background: transparent;
}
.b-checkbox.checkbox input[type=checkbox]:checked + .check {
  background: #7957d5 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
  border-color: #7957d5;
}
.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-white {
  background: white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%230a0a0a' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
  border-color: white;
}
.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-black {
  background: #0a0a0a url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:white' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
  border-color: #0a0a0a;
}
.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-light {
  background: whitesmoke url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:rgba(0, 0, 0, 0.7)' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
  border-color: whitesmoke;
}
.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-dark {
  background: #363636 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
  border-color: #363636;
}
.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-primary {
  background: #7957d5 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
  border-color: #7957d5;
}
.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-link {
  background: #7957d5 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
  border-color: #7957d5;
}
.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-info {
  background: #167df0 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
  border-color: #167df0;
}
.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-success {
  background: #48c774 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
  border-color: #48c774;
}
.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-warning {
  background: #ffdd57 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:rgba(0, 0, 0, 0.7)' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
  border-color: #ffdd57;
}
.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-danger {
  background: #f14668 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
  border-color: #f14668;
}
.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check {
  background: #7957d5 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E") no-repeat center center;
  border-color: #7957d5;
}
.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-white {
  background: white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%230a0a0a' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E") no-repeat center center;
  border-color: white;
}
.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-black {
  background: #0a0a0a url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:white' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E") no-repeat center center;
  border-color: #0a0a0a;
}
.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-light {
  background: whitesmoke url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:rgba(0, 0, 0, 0.7)' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E") no-repeat center center;
  border-color: whitesmoke;
}
.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-dark {
  background: #363636 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E") no-repeat center center;
  border-color: #363636;
}
.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-primary {
  background: #7957d5 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E") no-repeat center center;
  border-color: #7957d5;
}
.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-link {
  background: #7957d5 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E") no-repeat center center;
  border-color: #7957d5;
}
.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-info {
  background: #167df0 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E") no-repeat center center;
  border-color: #167df0;
}
.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-success {
  background: #48c774 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E") no-repeat center center;
  border-color: #48c774;
}
.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-warning {
  background: #ffdd57 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:rgba(0, 0, 0, 0.7)' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E") no-repeat center center;
  border-color: #ffdd57;
}
.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-danger {
  background: #f14668 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E") no-repeat center center;
  border-color: #f14668;
}
.b-checkbox.checkbox input[type=checkbox]:focus + .check {
  box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.8);
}
.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check {
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);
}
.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-white {
  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);
}
.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-black {
  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);
}
.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-light {
  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);
}
.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-dark {
  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);
}
.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-primary {
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);
}
.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-link {
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);
}
.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-info {
  box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);
}
.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-success {
  box-shadow: 0 0 0.5em rgba(72, 199, 116, 0.8);
}
.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-warning {
  box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.8);
}
.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-danger {
  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);
}
.b-checkbox.checkbox .control-label {
  padding-left: calc(0.75em - 1px);
}
.b-checkbox.checkbox.button {
  display: flex;
}
.b-checkbox.checkbox[disabled] {
  opacity: 0.5;
}
.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check {
  border-color: #7957d5;
}
.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-white {
  border-color: white;
}
.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-black {
  border-color: #0a0a0a;
}
.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-light {
  border-color: whitesmoke;
}
.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-dark {
  border-color: #363636;
}
.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-primary {
  border-color: #7957d5;
}
.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-link {
  border-color: #7957d5;
}
.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-info {
  border-color: #167df0;
}
.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-success {
  border-color: #48c774;
}
.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-warning {
  border-color: #ffdd57;
}
.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-danger {
  border-color: #f14668;
}
.b-checkbox.checkbox.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}
.b-checkbox.checkbox.is-medium {
  font-size: 1.25rem;
}
.b-checkbox.checkbox.is-large {
  font-size: 1.5rem;
}

.b-clockpicker .card-header {
  background-color: #7957d5;
  color: #fff;
}
.b-clockpicker .b-clockpicker-face:after {
  background-color: #7957d5;
}
.b-clockpicker .b-clockpicker-face-hand {
  background-color: #7957d5;
  border-color: #7957d5;
}
.b-clockpicker .b-clockpicker-face-number.active {
  background-color: #7957d5;
  color: #fff;
}
.b-clockpicker.is-white .card-header {
  background-color: white;
  color: #0a0a0a;
}
.b-clockpicker.is-white .b-clockpicker-face:after {
  background-color: white;
}
.b-clockpicker.is-white .b-clockpicker-face-hand {
  background-color: white;
  border-color: white;
}
.b-clockpicker.is-white .b-clockpicker-face-number.active {
  background-color: white;
  color: #0a0a0a;
}
.b-clockpicker.is-black .card-header {
  background-color: #0a0a0a;
  color: white;
}
.b-clockpicker.is-black .b-clockpicker-face:after {
  background-color: #0a0a0a;
}
.b-clockpicker.is-black .b-clockpicker-face-hand {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
}
.b-clockpicker.is-black .b-clockpicker-face-number.active {
  background-color: #0a0a0a;
  color: white;
}
.b-clockpicker.is-light .card-header {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.b-clockpicker.is-light .b-clockpicker-face:after {
  background-color: whitesmoke;
}
.b-clockpicker.is-light .b-clockpicker-face-hand {
  background-color: whitesmoke;
  border-color: whitesmoke;
}
.b-clockpicker.is-light .b-clockpicker-face-number.active {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.b-clockpicker.is-dark .card-header {
  background-color: #363636;
  color: #fff;
}
.b-clockpicker.is-dark .b-clockpicker-face:after {
  background-color: #363636;
}
.b-clockpicker.is-dark .b-clockpicker-face-hand {
  background-color: #363636;
  border-color: #363636;
}
.b-clockpicker.is-dark .b-clockpicker-face-number.active {
  background-color: #363636;
  color: #fff;
}
.b-clockpicker.is-primary .card-header {
  background-color: #7957d5;
  color: #fff;
}
.b-clockpicker.is-primary .b-clockpicker-face:after {
  background-color: #7957d5;
}
.b-clockpicker.is-primary .b-clockpicker-face-hand {
  background-color: #7957d5;
  border-color: #7957d5;
}
.b-clockpicker.is-primary .b-clockpicker-face-number.active {
  background-color: #7957d5;
  color: #fff;
}
.b-clockpicker.is-link .card-header {
  background-color: #7957d5;
  color: #fff;
}
.b-clockpicker.is-link .b-clockpicker-face:after {
  background-color: #7957d5;
}
.b-clockpicker.is-link .b-clockpicker-face-hand {
  background-color: #7957d5;
  border-color: #7957d5;
}
.b-clockpicker.is-link .b-clockpicker-face-number.active {
  background-color: #7957d5;
  color: #fff;
}
.b-clockpicker.is-info .card-header {
  background-color: #167df0;
  color: #fff;
}
.b-clockpicker.is-info .b-clockpicker-face:after {
  background-color: #167df0;
}
.b-clockpicker.is-info .b-clockpicker-face-hand {
  background-color: #167df0;
  border-color: #167df0;
}
.b-clockpicker.is-info .b-clockpicker-face-number.active {
  background-color: #167df0;
  color: #fff;
}
.b-clockpicker.is-success .card-header {
  background-color: #48c774;
  color: #fff;
}
.b-clockpicker.is-success .b-clockpicker-face:after {
  background-color: #48c774;
}
.b-clockpicker.is-success .b-clockpicker-face-hand {
  background-color: #48c774;
  border-color: #48c774;
}
.b-clockpicker.is-success .b-clockpicker-face-number.active {
  background-color: #48c774;
  color: #fff;
}
.b-clockpicker.is-warning .card-header {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}
.b-clockpicker.is-warning .b-clockpicker-face:after {
  background-color: #ffdd57;
}
.b-clockpicker.is-warning .b-clockpicker-face-hand {
  background-color: #ffdd57;
  border-color: #ffdd57;
}
.b-clockpicker.is-warning .b-clockpicker-face-number.active {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}
.b-clockpicker.is-danger .card-header {
  background-color: #f14668;
  color: #fff;
}
.b-clockpicker.is-danger .b-clockpicker-face:after {
  background-color: #f14668;
}
.b-clockpicker.is-danger .b-clockpicker-face-hand {
  background-color: #f14668;
  border-color: #f14668;
}
.b-clockpicker.is-danger .b-clockpicker-face-number.active {
  background-color: #f14668;
  color: #fff;
}
.b-clockpicker .dropdown-menu {
  min-width: 0;
}
.b-clockpicker .dropdown,
.b-clockpicker .dropdown-trigger {
  width: 100%;
}
.b-clockpicker .dropdown .input[readonly],
.b-clockpicker .dropdown-trigger .input[readonly] {
  cursor: pointer;
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
}
.b-clockpicker .dropdown .input[readonly]:focus, .b-clockpicker .dropdown .input[readonly].is-focused, .b-clockpicker .dropdown .input[readonly]:active, .b-clockpicker .dropdown .input[readonly].is-active,
.b-clockpicker .dropdown-trigger .input[readonly]:focus,
.b-clockpicker .dropdown-trigger .input[readonly].is-focused,
.b-clockpicker .dropdown-trigger .input[readonly]:active,
.b-clockpicker .dropdown-trigger .input[readonly].is-active {
  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
}
.b-clockpicker .dropdown-item, .b-clockpicker .dropdown .dropdown-menu .has-link a, .dropdown .dropdown-menu .has-link .b-clockpicker a {
  font-size: inherit;
  padding: 0;
}
.b-clockpicker .dropdown-content {
  padding-top: 0;
  padding-bottom: 0;
}
.b-clockpicker .card {
  border-radius: 0.25rem;
}
.b-clockpicker .card-header {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.b-clockpicker .card-content {
  padding: 12px;
}
.b-clockpicker-btn {
  cursor: pointer;
  opacity: 0.6;
}
.b-clockpicker-btn:hover, .b-clockpicker-btn.active {
  opacity: 1;
}
.b-clockpicker-period .b-clockpicker-btn {
  font-size: 16px;
}
.b-clockpicker-time span {
  align-items: center;
  display: inline-flex;
  justify-content: center;
}
.b-clockpicker-header {
  display: flex;
  line-height: 1;
  justify-content: flex-end;
  color: inherit;
}
.b-clockpicker-header .b-clockpicker-time {
  white-space: nowrap;
}
.b-clockpicker-header .b-clockpicker-time span {
  height: 60px;
  font-size: 60px;
}
.b-clockpicker-header .b-clockpicker-period {
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin: 8px 0 6px 8px;
}
.b-clockpicker-body {
  transition: 0.9s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.b-clockpicker-body .b-clockpicker-btn {
  padding: 0 8px;
  border-radius: 290486px;
  margin-bottom: 2px;
}
.b-clockpicker-body .b-clockpicker-btn:hover, .b-clockpicker-body .b-clockpicker-btn.active {
  background-color: #7957d5;
  color: white;
}
.b-clockpicker-body .b-clockpicker-period {
  position: absolute;
  top: 5px;
  right: 5px;
}
.b-clockpicker-body .b-clockpicker-time {
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 16px;
}
.b-clockpicker-body .b-clockpicker-face {
  border-radius: 50%;
  position: relative;
  background-color: #dbdbdb;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.b-clockpicker-body .b-clockpicker-face:after {
  border-radius: 50%;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  z-index: 10;
}
.b-clockpicker-body .b-clockpicker-face-outer-ring {
  user-select: none;
  height: calc(100% - 50px);
  width: calc(100% - 50px);
  position: relative;
  border-radius: 50%;
}
.b-clockpicker-body .b-clockpicker-face-number {
  align-items: center;
  border-radius: 100%;
  cursor: default;
  display: flex;
  font-size: 18px;
  text-align: center;
  justify-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
  left: calc(50% - 40px / 2);
  top: calc(50% - 40px / 2);
  user-select: none;
}
.b-clockpicker-body .b-clockpicker-face-number > span {
  z-index: 1;
}
.b-clockpicker-body .b-clockpicker-face-number:before, .b-clockpicker-body .b-clockpicker-face-number:after {
  content: "";
  height: 40px;
  width: 40px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.b-clockpicker-body .b-clockpicker-face-number.active {
  cursor: default;
  z-index: 2;
}
.b-clockpicker-body .b-clockpicker-face-number.disabled {
  pointer-events: none;
  opacity: 0.25;
}
.b-clockpicker-body .b-clockpicker-face-hand {
  height: calc(50% - 6px);
  width: 2px;
  bottom: 50%;
  left: calc(50% - 1px);
  transform-origin: center bottom;
  position: absolute;
  will-change: transform;
  z-index: 1;
}
.b-clockpicker-body .b-clockpicker-face-hand:before {
  background: transparent;
  border-width: 2px;
  border-style: solid;
  border-color: inherit;
  border-radius: 100%;
  width: 12px;
  height: 12px;
  content: "";
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.b-clockpicker-footer {
  display: block;
  padding: 12px;
}
.b-clockpicker.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}
.b-clockpicker.is-medium {
  font-size: 1.25rem;
}
.b-clockpicker.is-large {
  font-size: 1.5rem;
}

.collapse .collapse-trigger {
  display: inline;
  cursor: pointer;
}
.collapse .collapse-content {
  display: inherit;
}

.datepicker {
  font-size: 0.875rem;
}
.datepicker .dropdown,
.datepicker .dropdown-trigger {
  width: 100%;
}
.datepicker .dropdown .input[readonly],
.datepicker .dropdown-trigger .input[readonly] {
  cursor: pointer;
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
}
.datepicker .dropdown .input[readonly]:focus, .datepicker .dropdown .input[readonly].is-focused, .datepicker .dropdown .input[readonly]:active, .datepicker .dropdown .input[readonly].is-active,
.datepicker .dropdown-trigger .input[readonly]:focus,
.datepicker .dropdown-trigger .input[readonly].is-focused,
.datepicker .dropdown-trigger .input[readonly]:active,
.datepicker .dropdown-trigger .input[readonly].is-active {
  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
}
.datepicker .dropdown.is-disabled {
  opacity: 1;
}
.datepicker .dropdown-content {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
}
.datepicker .dropdown-item, .datepicker .dropdown .dropdown-menu .has-link a, .dropdown .dropdown-menu .has-link .datepicker a {
  font-size: inherit;
}
.datepicker .datepicker-header {
  padding-bottom: 0.875rem;
  margin-bottom: 0.875rem;
  border-bottom: 1px solid #dbdbdb;
}
.datepicker .datepicker-footer {
  margin-top: 0.875rem;
  padding-top: 0.875rem;
  border-top: 1px solid #dbdbdb;
}
.datepicker .datepicker-table {
  display: table;
  margin: 0 auto 0 auto;
}
.datepicker .datepicker-table .datepicker-cell {
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
}
.datepicker .datepicker-table .datepicker-header {
  display: table-header-group;
}
.datepicker .datepicker-table .datepicker-header .datepicker-cell {
  color: #7a7a7a;
  font-weight: 600;
}
.datepicker .datepicker-table .datepicker-body {
  display: table-row-group;
}
.datepicker .datepicker-table .datepicker-body .datepicker-row {
  display: table-row;
}
.datepicker .datepicker-table .datepicker-body .datepicker-months {
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 17rem;
}
.datepicker .datepicker-table .datepicker-body .datepicker-months .datepicker-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  height: 2.5rem;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-unselectable {
  color: #b5b5b5;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-today {
  border: solid 1px rgba(121, 87, 213, 0.5);
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable {
  color: #4a4a4a;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:hover:not(.is-selected), .datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:focus:not(.is-selected) {
  background-color: whitesmoke;
  color: #0a0a0a;
  cursor: pointer;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-first-hovered {
  background-color: #7a7a7a;
  color: #dbdbdb;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-within-hovered {
  background-color: whitesmoke;
  color: #0a0a0a;
  border-radius: 0;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-last-hovered {
  background-color: #7a7a7a;
  color: #dbdbdb;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected {
  background-color: #7957d5;
  color: #fff;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-first-selected {
  background-color: #7957d5;
  color: #fff;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-within-selected {
  background-color: rgba(121, 87, 213, 0.5);
  border-radius: 0;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-last-selected {
  background-color: #7957d5;
  color: #fff;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-nearby:not(.is-selected) {
  color: #b5b5b5;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-week-number {
  cursor: default;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell {
  padding: 0.3rem 0.75rem 0.75rem;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event {
  position: relative;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events {
  bottom: 0.425rem;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 0 0.35rem;
  position: absolute;
  width: 100%;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-white {
  background-color: white;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-black {
  background-color: #0a0a0a;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-light {
  background-color: whitesmoke;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-dark {
  background-color: #363636;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-primary {
  background-color: #7957d5;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-link {
  background-color: #7957d5;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-info {
  background-color: #167df0;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-success {
  background-color: #48c774;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-warning {
  background-color: #ffdd57;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-danger {
  background-color: #f14668;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.dots .event {
  border-radius: 50%;
  height: 0.35em;
  margin: 0 0.1em;
  width: 0.35em;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.bars .event {
  height: 0.25em;
  width: 100%;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected {
  overflow: hidden;
}
.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected .events .event.is-primary {
  background-color: #aa94e4;
}
.datepicker.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}
.datepicker.is-medium {
  font-size: 1.25rem;
}
.datepicker.is-large {
  font-size: 1.5rem;
}
@media screen and (min-width: 1024px) {
  .datepicker .footer-horizontal-timepicker {
    border: none;
    padding-left: 10px;
    margin-left: 5px;
    display: flex;
  }
  .datepicker .dropdown-horizonal-timepicker {
    display: flex;
  }
  .datepicker .content-horizonal-timepicker {
    border-right: 1px solid #dbdbdb;
  }
}

.dialog .modal-card {
  max-width: 460px;
  width: auto;
}
.dialog .modal-card .modal-card-head {
  font-size: 1.25rem;
  font-weight: 600;
}
.dialog .modal-card .modal-card-body .field {
  margin-top: 16px;
}
.dialog .modal-card .modal-card-body.is-titleless {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.dialog .modal-card .modal-card-foot {
  justify-content: flex-end;
}
.dialog .modal-card .modal-card-foot .button {
  display: inline;
  min-width: 5em;
  font-weight: 600;
}
@media screen and (min-width: 769px), print {
  .dialog .modal-card {
    min-width: 320px;
  }
}
.dialog.is-small .modal-card,
.dialog.is-small .input,
.dialog.is-small .button {
  border-radius: 2px;
  font-size: 0.75rem;
}
.dialog.is-medium .modal-card,
.dialog.is-medium .input,
.dialog.is-medium .button {
  font-size: 1.25rem;
}
.dialog.is-large .modal-card,
.dialog.is-large .input,
.dialog.is-large .button {
  font-size: 1.5rem;
}
.dialog.has-custom-container {
  position: absolute;
}

.dropdown + .dropdown {
  margin-left: 0.5em;
}
.dropdown .background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  position: fixed;
  background-color: rgba(10, 10, 10, 0.86);
  z-index: 40;
  cursor: pointer;
}
@media screen and (min-width: 1024px) {
  .dropdown .background {
    display: none;
  }
}
.dropdown.dropdown-menu-animation .dropdown-menu {
  display: block;
}
.dropdown .dropdown-menu .dropdown-item.is-disabled, .dropdown .dropdown-menu .has-link a.is-disabled {
  cursor: not-allowed;
}
.dropdown .dropdown-menu .dropdown-item.is-disabled:hover, .dropdown .dropdown-menu .has-link a.is-disabled:hover {
  background: inherit;
  color: inherit;
}
.dropdown .dropdown-menu .has-link a {
  padding-right: 3rem;
  white-space: nowrap;
}
.dropdown.is-hoverable:not(.is-active) .dropdown-menu {
  display: none;
}
.dropdown.is-hoverable:hover .dropdown-menu {
  display: inherit;
}
.dropdown.is-expanded {
  width: 100%;
}
.dropdown.is-expanded .dropdown-trigger {
  width: 100%;
}
.dropdown.is-expanded .dropdown-menu {
  width: 100%;
}
.dropdown.is-expanded.is-mobile-modal .dropdown-menu {
  max-width: 100%;
}
.dropdown:not(.is-disabled) .dropdown-menu .dropdown-item.is-disabled, .dropdown:not(.is-disabled) .dropdown-menu .has-link a.is-disabled {
  opacity: 0.5;
}
.dropdown .navbar-item {
  height: 100%;
}
.dropdown.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.dropdown.is-disabled .dropdown-trigger {
  pointer-events: none;
}
.dropdown.is-inline .dropdown-menu {
  position: static;
  display: inline-block;
  padding: 0;
}
.dropdown.is-top-right .dropdown-menu {
  top: auto;
  bottom: 100%;
}
.dropdown.is-top-left .dropdown-menu {
  top: auto;
  bottom: 100%;
  right: 0;
  left: auto;
}
.dropdown.is-bottom-left .dropdown-menu {
  right: 0;
  left: auto;
}
@media screen and (max-width: 1023px) {
  .dropdown.is-mobile-modal > .dropdown-menu {
    position: fixed !important;
    width: calc(100vw - 40px);
    max-width: 460px;
    max-height: calc(100vh - 120px);
    top: 25% !important;
    left: 50% !important;
    bottom: auto !important;
    right: auto !important;
    transform: translate3d(-50%, -25%, 0);
    white-space: normal;
    overflow-y: auto;
    z-index: 50 !important;
  }
  .dropdown.is-mobile-modal > .dropdown-menu > .dropdown-content > .dropdown-item, .dropdown .dropdown-menu .has-link .dropdown.is-mobile-modal > .dropdown-menu > .dropdown-content > a, .dropdown.is-mobile-modal > .dropdown-menu > .dropdown-content > .has-link a {
    padding: 1rem 1.5rem;
  }
}

.field.is-grouped .field {
  flex-shrink: 0;
}
.field.is-grouped .field:not(:last-child) {
  margin-right: 0.75rem;
}
.field.is-grouped .field.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.field.has-addons .control:first-child .control .button,
.field.has-addons .control:first-child .control .input,
.field.has-addons .control:first-child .control .select select {
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
.field.has-addons .control:last-child .control .button,
.field.has-addons .control:last-child .control .input,
.field.has-addons .control:last-child .control .select select {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
.field.has-addons .control .control .button,
.field.has-addons .control .control .input,
.field.has-addons .control .control .select select {
  border-radius: 0;
}
.field.has-addons .b-numberinput:not(:first-child) .control:first-child .button,
.field.has-addons .b-numberinput:not(:first-child) .control:first-child .input,
.field.has-addons .b-numberinput:not(:first-child) .control:first-child .select select {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.field.has-addons .b-numberinput:not(:last-child) .control:last-child .button,
.field.has-addons .b-numberinput:not(:last-child) .control:last-child .input,
.field.has-addons .b-numberinput:not(:last-child) .control:last-child .select select {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.field.has-addons.b-numberinput .control {
  margin-right: unset;
}

.field.is-floating-label, .field.is-floating-in-label {
  position: relative;
}
.field.is-floating-label .label, .field.is-floating-in-label .label {
  position: absolute;
  left: 1em;
  font-size: calc(1rem * 3 / 4);
  background-color: transparent;
  z-index: 5;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(100% - 2em);
  overflow: hidden;
}
.field.is-floating-label .label.is-small, .field.is-floating-in-label .label.is-small {
  font-size: calc(0.75rem * 3 / 4);
}
.field.is-floating-label .label.is-medium, .field.is-floating-in-label .label.is-medium {
  font-size: calc(1.25rem * 3 / 4);
}
.field.is-floating-label .label.is-large, .field.is-floating-in-label .label.is-large {
  font-size: calc(1.5rem * 3 / 4);
}
.field.is-floating-label .taginput .counter, .field.is-floating-in-label .taginput .counter {
  float: none;
  text-align: right;
}
.field.is-floating-label.has-addons > .label + .control .button,
.field.is-floating-label.has-addons > .label + .control .input,
.field.is-floating-label.has-addons > .label + .control .select select, .field.is-floating-in-label.has-addons > .label + .control .button,
.field.is-floating-in-label.has-addons > .label + .control .input,
.field.is-floating-in-label.has-addons > .label + .control .select select {
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
.field.is-floating-label .label {
  top: -0.775em;
  padding-left: 0.125em;
  padding-right: 0.125em;
}
.field.is-floating-label .label:before {
  content: "";
  display: block;
  position: absolute;
  top: 0.775em;
  left: 0;
  right: 0;
  height: 0.375em;
  background-color: white;
  z-index: -1;
}
.field.is-floating-label .input:focus,
.field.is-floating-label .textarea:focus,
.field.is-floating-label .select select:focus {
  box-shadow: none;
}
.field.is-floating-label .taginput .taginput-container {
  padding-top: 0.475em;
}
.field.is-floating-label .taginput .taginput-container.is-focused {
  box-shadow: none;
}
.field.is-floating-in-label > .label {
  top: 0.25em;
}
.field.is-floating-in-label > .label + .control.datepicker .input, .field.is-floating-in-label > .label + .control.timepicker .input {
  padding-top: calc(3.25em / 2 - (1.5rem * 3 / 4) / 2);
  padding-bottom: 1px;
  height: 3.25em;
}
.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .input,
.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .textarea,
.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) select {
  padding-top: calc(3.25em / 2 - (1.5rem * 3 / 4) / 2);
  padding-bottom: 1px;
  height: 3.25em;
}
.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple) {
  height: 3.25em;
}
.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple).is-loading::after {
  margin-top: calc(3.25em / 2 - (1.5rem * 3 / 4) / 2);
}
.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple)::after {
  margin-top: 1px;
}
.field.is-floating-in-label > .label + .control.taginput .taginput-container {
  padding-top: calc(3.25em / 2 - (1.5rem * 3 / 4) / 2 + (0.275em - 1px));
}
.field.is-floating-in-label > .label + .control:not(.taginput) .is-left.icon,
.field.is-floating-in-label > .label + .control:not(.taginput) .is-right.icon {
  height: 3.25em;
}
.field.is-floating-in-label > .label + .control:not(.taginput) .is-left.icon {
  padding-top: calc(3.25em / 2 - (1.5rem * 3 / 4) / 2);
}
.field.is-floating-in-label > .label + .control.is-loading::after {
  margin-top: calc(3.25em / 2 - (1.5rem * 3 / 4) / 2);
}
.field.is-floating-in-label > .label + .field-body > .is-grouped .control .input,
.field.is-floating-in-label > .label + .field-body > .is-grouped .control .textarea,
.field.is-floating-in-label > .label + .field-body > .is-grouped .control select, .field.is-floating-in-label > .label + .field-body > .has-addons .control .input,
.field.is-floating-in-label > .label + .field-body > .has-addons .control .textarea,
.field.is-floating-in-label > .label + .field-body > .has-addons .control select {
  padding-top: calc(3.25em / 2 - (1.5rem * 3 / 4) / 2);
  padding-bottom: 1px;
}
.field.is-floating-in-label > .label + .field-body > .is-grouped .control .input,
.field.is-floating-in-label > .label + .field-body > .is-grouped .control .textarea,
.field.is-floating-in-label > .label + .field-body > .is-grouped .control select,
.field.is-floating-in-label > .label + .field-body > .is-grouped .control .button, .field.is-floating-in-label > .label + .field-body > .has-addons .control .input,
.field.is-floating-in-label > .label + .field-body > .has-addons .control .textarea,
.field.is-floating-in-label > .label + .field-body > .has-addons .control select,
.field.is-floating-in-label > .label + .field-body > .has-addons .control .button {
  height: 3.25em;
}
.field.is-floating-in-label.has-numberinput .b-numberinput .control .input,
.field.is-floating-in-label.has-numberinput .b-numberinput .control .button {
  height: 3.25em;
}
.field.is-floating-label.has-numberinput .label, .field.is-floating-in-label.has-numberinput .label {
  margin-left: calc(1rem * 3);
}
.field.is-floating-label.has-numberinput.has-numberinput-is-small .label, .field.is-floating-in-label.has-numberinput.has-numberinput-is-small .label {
  margin-left: calc(0.75rem * 3);
}
.field.is-floating-label.has-numberinput.has-numberinput-is-medium .label, .field.is-floating-in-label.has-numberinput.has-numberinput-is-medium .label {
  margin-left: calc(1.25rem * 3);
}
.field.is-floating-label.has-numberinput.has-numberinput-is-large .label, .field.is-floating-in-label.has-numberinput.has-numberinput-is-large .label {
  margin-left: calc(1.5rem * 3);
}
.field.is-floating-label.has-numberinput-compact .label, .field.is-floating-in-label.has-numberinput-compact .label {
  margin-left: calc(1rem * 2.25);
}
.field.is-floating-label.has-numberinput-compact.has-numberinput-is-small .label, .field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-small .label {
  margin-left: calc(0.75rem * 2.25);
}
.field.is-floating-label.has-numberinput-compact.has-numberinput-is-medium .label, .field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-medium .label {
  margin-left: calc(1.25rem * 2.25);
}
.field.is-floating-label.has-numberinput-compact.has-numberinput-is-large .label, .field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-large .label {
  margin-left: calc(1.5rem * 2.25);
}
.field.is-grouped-right.is-floating-in-label .label, .field.has-addons-right.is-floating-in-label .label {
  position: relative;
  left: calc(3.25em + 2em);
}
.field.is-grouped-right.is-floating-label .label, .field.has-addons-right.is-floating-label .label {
  position: relative;
  left: calc(3.25em + 2em);
}

.control .help.counter {
  float: right;
  margin-left: 0.5em;
}
.control .icon.is-clickable {
  pointer-events: auto;
  cursor: pointer;
}
.control.is-loading::after {
  top: calc(50% - (1em / 2));
  right: calc((2.5em / 2) - .5em);
}

.icon {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: inherit;
}
.icon svg {
  background-color: transparent;
  fill: currentColor;
  stroke-width: 0;
  stroke: currentColor;
  pointer-events: none;
  width: auto;
  height: auto;
}

.b-image-wrapper > img {
  object-fit: cover;
}
.b-image-wrapper > img.has-ratio, .b-image-wrapper > img.placeholder {
  height: 100%;
  width: 100%;
}
.b-image-wrapper > img.placeholder {
  filter: blur(10px);
}

.loading-overlay {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  display: none;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
}
.loading-overlay.is-active {
  display: flex;
}
.loading-overlay.is-full-page {
  position: fixed;
}
.loading-overlay.is-full-page .loading-icon:after {
  top: calc(50% - 2.5em);
  left: calc(50% - 2.5em);
  width: 5em;
  height: 5em;
}
.loading-overlay .loading-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: #7f7f7f;
  background: rgba(255, 255, 255, 0.5);
}
.loading-overlay .loading-icon {
  position: relative;
}
.loading-overlay .loading-icon:after {
  animation: spinAround 500ms infinite linear;
  border: 2px solid #dbdbdb;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
  position: absolute;
  top: calc(50% - 1.5em);
  left: calc(50% - 1.5em);
  width: 3em;
  height: 3em;
  border-width: 0.25em;
}

.menu .menu-list li > a.is-disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
}

.message .media,
.notification .media {
  padding-top: 0;
  border: 0;
}

.modal.is-full-screen > .animation-content,
.modal.is-full-screen > .animation-content > .modal-card {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  margin: 0;
  background-color: whitesmoke;
}
.modal .animation-content {
  margin: 0 20px;
}
.modal .animation-content .modal-card {
  margin: 0;
}
@media screen and (max-width: 768px) {
  .modal .animation-content {
    width: 100%;
  }
}
.modal .modal-content {
  width: 100%;
}

.navbar.has-navbar-centered .navbar-start {
  justify-content: center;
  margin-left: auto;
}
.navbar.has-navbar-centered .navbar-end {
  margin-left: 0;
}
.navbar .navbar-dropdown.is-boxed {
  visibility: hidden;
  transition-property: opacity, visibility, transform;
}
.navbar .navbar-item.has-dropdown.is-active .is-boxed,
.navbar .navbar-item.has-dropdown.is-hoverable:hover .is-boxed {
  visibility: visible;
}

.notices {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2em;
  overflow: hidden;
  z-index: 1000;
  pointer-events: none;
}
.notices .toast {
  display: inline-flex;
  animation-duration: 150ms;
  margin: 0.5em 0;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 2em;
  padding: 0.75em 1.5em;
  pointer-events: auto;
  opacity: 0.92;
}
.notices .toast.is-white {
  color: #0a0a0a;
  background: white;
}
.notices .toast.is-black {
  color: white;
  background: #0a0a0a;
}
.notices .toast.is-light {
  color: rgba(0, 0, 0, 0.7);
  background: whitesmoke;
}
.notices .toast.is-dark {
  color: #fff;
  background: #363636;
}
.notices .toast.is-primary {
  color: #fff;
  background: #7957d5;
}
.notices .toast.is-link {
  color: #fff;
  background: #7957d5;
}
.notices .toast.is-info {
  color: #fff;
  background: #167df0;
}
.notices .toast.is-success {
  color: #fff;
  background: #48c774;
}
.notices .toast.is-warning {
  color: rgba(0, 0, 0, 0.7);
  background: #ffdd57;
}
.notices .toast.is-danger {
  color: #fff;
  background: #f14668;
}
.notices .snackbar {
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  animation-duration: 150ms;
  margin: 0.5em 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  pointer-events: auto;
  background: #363636;
  color: #fff;
  min-height: 3em;
}
.notices .snackbar .text {
  padding: 0.5em 1em;
}
.notices .snackbar .action {
  margin-left: auto;
  padding: 0.5em;
  padding-left: 0;
}
.notices .snackbar .action .button {
  font-weight: 600;
  text-transform: uppercase;
  background: #363636;
  border: transparent;
}
.notices .snackbar .action .button:hover {
  background: #292929;
}
.notices .snackbar .action .button:active {
  background: #292929;
}
.notices .snackbar .action.is-white .button {
  color: white;
}
.notices .snackbar .action.is-black .button {
  color: #0a0a0a;
}
.notices .snackbar .action.is-light .button {
  color: whitesmoke;
}
.notices .snackbar .action.is-dark .button {
  color: #363636;
}
.notices .snackbar .action.is-primary .button {
  color: #7957d5;
}
.notices .snackbar .action.is-link .button {
  color: #7957d5;
}
.notices .snackbar .action.is-info .button {
  color: #167df0;
}
.notices .snackbar .action.is-success .button {
  color: #48c774;
}
.notices .snackbar .action.is-warning .button {
  color: #ffdd57;
}
.notices .snackbar .action.is-danger .button {
  color: #f14668;
}
.notices .snackbar .action.is-cancel {
  padding-right: 0;
}
@media screen and (max-width: 768px) {
  .notices .snackbar {
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
}
@media screen and (min-width: 769px), print {
  .notices .snackbar {
    min-width: 350px;
    max-width: 600px;
    overflow: hidden;
  }
}
.notices .notification {
  max-width: 600px;
}
.notices .toast.is-top, .notices .toast.is-bottom,
.notices .snackbar.is-top,
.notices .snackbar.is-bottom,
.notices .notification.is-top,
.notices .notification.is-bottom {
  align-self: center;
}
.notices .toast.is-top-right, .notices .toast.is-bottom-right,
.notices .snackbar.is-top-right,
.notices .snackbar.is-bottom-right,
.notices .notification.is-top-right,
.notices .notification.is-bottom-right {
  align-self: flex-end;
}
.notices .toast.is-top-left, .notices .toast.is-bottom-left,
.notices .snackbar.is-top-left,
.notices .snackbar.is-bottom-left,
.notices .notification.is-top-left,
.notices .notification.is-bottom-left {
  align-self: flex-start;
}
.notices .toast.is-toast,
.notices .snackbar.is-toast,
.notices .notification.is-toast {
  opacity: 0.92;
}
.notices.is-top {
  flex-direction: column;
}
.notices.is-bottom {
  flex-direction: column-reverse;
}
.notices.is-bottom .notification {
  margin-bottom: 0;
}
.notices.is-bottom .notification:not(:first-child) {
  margin-bottom: 1.5rem;
}
.notices.has-custom-container {
  position: absolute;
}
@media screen and (max-width: 768px) {
  .notices {
    padding: 0;
    position: fixed !important;
  }
}

.b-numberinput.field {
  margin-bottom: 0;
}
.b-numberinput.field.is-grouped div.control {
  flex-grow: 1;
  flex-shrink: 1;
}
.b-numberinput.field.has-addons.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.b-numberinput input[type=number]::-webkit-inner-spin-button,
.b-numberinput input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.b-numberinput input[type=number] {
  -moz-appearance: textfield;
}
.b-numberinput input[type=number] {
  text-align: center;
}
.b-numberinput .button.is-rounded {
  padding-left: 1em;
  padding-right: 1em;
}

.pagination .pagination-next,
.pagination .pagination-previous {
  padding-left: 0.75em;
  padding-right: 0.75em;
}
.pagination .pagination-next.is-disabled,
.pagination .pagination-previous.is-disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
}
.pagination.is-simple {
  justify-content: normal;
}
.pagination.is-simple.is-centered {
  justify-content: center;
}
.pagination.is-simple.is-right {
  justify-content: flex-end;
}
.pagination .is-current {
  pointer-events: none;
  cursor: not-allowed;
}

.progress-wrapper {
  position: relative;
  overflow: hidden;
}
.progress-wrapper:not(:last-child) {
  margin-bottom: 1.5rem;
}
.progress-wrapper .progress-value {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: calc(1rem / 1.5);
  line-height: 1rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.7);
  white-space: nowrap;
}
.progress-wrapper .progress, .progress-wrapper .progress-wrapper.is-not-native, .progress-wrapper .progress-bar {
  margin-bottom: 0;
}
.progress-wrapper .progress.is-small + .progress-value, .progress-wrapper .is-small.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress.is-small .progress-value, .progress-wrapper .is-small.progress-wrapper.is-not-native .progress-value, .progress-wrapper .progress-bar.is-small + .progress-value, .progress-wrapper .progress-bar.is-small .progress-value {
  font-size: calc(0.75rem / 1.5);
  line-height: 0.75rem;
}
.progress-wrapper .progress.is-medium + .progress-value, .progress-wrapper .is-medium.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress.is-medium .progress-value, .progress-wrapper .is-medium.progress-wrapper.is-not-native .progress-value, .progress-wrapper .progress-bar.is-medium + .progress-value, .progress-wrapper .progress-bar.is-medium .progress-value {
  font-size: calc(1.25rem / 1.5);
  line-height: 1.25rem;
}
.progress-wrapper .progress.is-large + .progress-value, .progress-wrapper .is-large.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress.is-large .progress-value, .progress-wrapper .is-large.progress-wrapper.is-not-native .progress-value, .progress-wrapper .progress-bar.is-large + .progress-value, .progress-wrapper .progress-bar.is-large .progress-value {
  font-size: calc(1.5rem / 1.5);
  line-height: 1.5rem;
}
.progress-wrapper .progress::-webkit-progress-value, .progress-wrapper .progress-wrapper.is-not-native::-webkit-progress-value, .progress-wrapper .progress-bar::-webkit-progress-value {
  transition: width 0.5s ease;
}
.progress-wrapper .progress.is-more-than-half + .progress-value, .progress-wrapper .is-more-than-half.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half + .progress-value {
  color: #fff;
}
.progress-wrapper .progress.is-more-than-half.is-white + .progress-value, .progress-wrapper .is-more-than-half.is-white.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-white + .progress-value {
  color: #0a0a0a;
}
.progress-wrapper .progress.is-more-than-half.is-black + .progress-value, .progress-wrapper .is-more-than-half.is-black.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-black + .progress-value {
  color: white;
}
.progress-wrapper .progress.is-more-than-half.is-light + .progress-value, .progress-wrapper .is-more-than-half.is-light.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-light + .progress-value {
  color: rgba(0, 0, 0, 0.7);
}
.progress-wrapper .progress.is-more-than-half.is-dark + .progress-value, .progress-wrapper .is-more-than-half.is-dark.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-dark + .progress-value {
  color: #fff;
}
.progress-wrapper .progress.is-more-than-half.is-primary + .progress-value, .progress-wrapper .is-more-than-half.is-primary.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-primary + .progress-value {
  color: #fff;
}
.progress-wrapper .progress.is-more-than-half.is-link + .progress-value, .progress-wrapper .is-more-than-half.is-link.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-link + .progress-value {
  color: #fff;
}
.progress-wrapper .progress.is-more-than-half.is-info + .progress-value, .progress-wrapper .is-more-than-half.is-info.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-info + .progress-value {
  color: #fff;
}
.progress-wrapper .progress.is-more-than-half.is-success + .progress-value, .progress-wrapper .is-more-than-half.is-success.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-success + .progress-value {
  color: #fff;
}
.progress-wrapper .progress.is-more-than-half.is-warning + .progress-value, .progress-wrapper .is-more-than-half.is-warning.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-warning + .progress-value {
  color: rgba(0, 0, 0, 0.7);
}
.progress-wrapper .progress.is-more-than-half.is-danger + .progress-value, .progress-wrapper .is-more-than-half.is-danger.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-danger + .progress-value {
  color: #fff;
}
.progress-wrapper.is-not-native {
  white-space: nowrap;
  background-color: #ededed;
  border-radius: 290486px;
}
.progress-wrapper.is-not-native .progress-bar {
  position: relative;
  display: inline-block;
  vertical-align: top;
  height: 100%;
  background-color: #4a4a4a;
}
.progress-wrapper.is-not-native .progress-bar .progress-value {
  color: #fff;
}
.progress-wrapper.is-not-native .progress-bar.is-white {
  background-color: white;
}
.progress-wrapper.is-not-native .progress-bar.is-white .progress-value {
  color: #0a0a0a;
}
.progress-wrapper.is-not-native .progress-bar.is-black {
  background-color: #0a0a0a;
}
.progress-wrapper.is-not-native .progress-bar.is-black .progress-value {
  color: white;
}
.progress-wrapper.is-not-native .progress-bar.is-light {
  background-color: whitesmoke;
}
.progress-wrapper.is-not-native .progress-bar.is-light .progress-value {
  color: rgba(0, 0, 0, 0.7);
}
.progress-wrapper.is-not-native .progress-bar.is-dark {
  background-color: #363636;
}
.progress-wrapper.is-not-native .progress-bar.is-dark .progress-value {
  color: #fff;
}
.progress-wrapper.is-not-native .progress-bar.is-primary {
  background-color: #7957d5;
}
.progress-wrapper.is-not-native .progress-bar.is-primary .progress-value {
  color: #fff;
}
.progress-wrapper.is-not-native .progress-bar.is-link {
  background-color: #7957d5;
}
.progress-wrapper.is-not-native .progress-bar.is-link .progress-value {
  color: #fff;
}
.progress-wrapper.is-not-native .progress-bar.is-info {
  background-color: #167df0;
}
.progress-wrapper.is-not-native .progress-bar.is-info .progress-value {
  color: #fff;
}
.progress-wrapper.is-not-native .progress-bar.is-success {
  background-color: #48c774;
}
.progress-wrapper.is-not-native .progress-bar.is-success .progress-value {
  color: #fff;
}
.progress-wrapper.is-not-native .progress-bar.is-warning {
  background-color: #ffdd57;
}
.progress-wrapper.is-not-native .progress-bar.is-warning .progress-value {
  color: rgba(0, 0, 0, 0.7);
}
.progress-wrapper.is-not-native .progress-bar.is-danger {
  background-color: #f14668;
}
.progress-wrapper.is-not-native .progress-bar.is-danger .progress-value {
  color: #fff;
}

.b-radio.radio {
  outline: none;
  display: inline-flex;
  align-items: center;
}
.b-radio.radio:not(.button) {
  margin-right: 0.5em;
}
.b-radio.radio:not(.button) + .radio:last-child {
  margin-right: 0;
}
.b-radio.radio + .radio {
  margin-left: 0;
}
.b-radio.radio input[type=radio] {
  position: absolute;
  left: 0;
  opacity: 0;
  outline: none;
  z-index: -1;
}
.b-radio.radio input[type=radio] + .check {
  display: flex;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  width: 1.25em;
  height: 1.25em;
  transition: background 150ms ease-out;
  border-radius: 50%;
  border: 2px solid #7a7a7a;
}
.b-radio.radio input[type=radio] + .check:before {
  content: "";
  display: flex;
  position: absolute;
  left: 50%;
  margin-left: calc(-1.25em/2);
  bottom: 50%;
  margin-bottom: calc(-1.25em/2);
  width: 1.25em;
  height: 1.25em;
  transition: transform 150ms ease-out;
  border-radius: 50%;
  transform: scale(0);
  background-color: #7957d5;
}
.b-radio.radio input[type=radio] + .check.is-white:before {
  background: white;
}
.b-radio.radio input[type=radio] + .check.is-black:before {
  background: #0a0a0a;
}
.b-radio.radio input[type=radio] + .check.is-light:before {
  background: whitesmoke;
}
.b-radio.radio input[type=radio] + .check.is-dark:before {
  background: #363636;
}
.b-radio.radio input[type=radio] + .check.is-primary:before {
  background: #7957d5;
}
.b-radio.radio input[type=radio] + .check.is-link:before {
  background: #7957d5;
}
.b-radio.radio input[type=radio] + .check.is-info:before {
  background: #167df0;
}
.b-radio.radio input[type=radio] + .check.is-success:before {
  background: #48c774;
}
.b-radio.radio input[type=radio] + .check.is-warning:before {
  background: #ffdd57;
}
.b-radio.radio input[type=radio] + .check.is-danger:before {
  background: #f14668;
}
.b-radio.radio input[type=radio]:checked + .check {
  border-color: #7957d5;
}
.b-radio.radio input[type=radio]:checked + .check.is-white {
  border-color: white;
}
.b-radio.radio input[type=radio]:checked + .check.is-black {
  border-color: #0a0a0a;
}
.b-radio.radio input[type=radio]:checked + .check.is-light {
  border-color: whitesmoke;
}
.b-radio.radio input[type=radio]:checked + .check.is-dark {
  border-color: #363636;
}
.b-radio.radio input[type=radio]:checked + .check.is-primary {
  border-color: #7957d5;
}
.b-radio.radio input[type=radio]:checked + .check.is-link {
  border-color: #7957d5;
}
.b-radio.radio input[type=radio]:checked + .check.is-info {
  border-color: #167df0;
}
.b-radio.radio input[type=radio]:checked + .check.is-success {
  border-color: #48c774;
}
.b-radio.radio input[type=radio]:checked + .check.is-warning {
  border-color: #ffdd57;
}
.b-radio.radio input[type=radio]:checked + .check.is-danger {
  border-color: #f14668;
}
.b-radio.radio input[type=radio]:checked + .check:before {
  transform: scale(0.5);
}
.b-radio.radio input[type=radio]:focus + .check {
  box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.8);
}
.b-radio.radio input[type=radio]:focus:checked + .check {
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);
}
.b-radio.radio input[type=radio]:focus:checked + .check.is-white {
  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);
}
.b-radio.radio input[type=radio]:focus:checked + .check.is-black {
  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);
}
.b-radio.radio input[type=radio]:focus:checked + .check.is-light {
  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);
}
.b-radio.radio input[type=radio]:focus:checked + .check.is-dark {
  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);
}
.b-radio.radio input[type=radio]:focus:checked + .check.is-primary {
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);
}
.b-radio.radio input[type=radio]:focus:checked + .check.is-link {
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);
}
.b-radio.radio input[type=radio]:focus:checked + .check.is-info {
  box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);
}
.b-radio.radio input[type=radio]:focus:checked + .check.is-success {
  box-shadow: 0 0 0.5em rgba(72, 199, 116, 0.8);
}
.b-radio.radio input[type=radio]:focus:checked + .check.is-warning {
  box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.8);
}
.b-radio.radio input[type=radio]:focus:checked + .check.is-danger {
  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);
}
.b-radio.radio .control-label {
  padding-left: calc(0.75em - 1px);
}
.b-radio.radio.button {
  display: flex;
}
.b-radio.radio.button.is-selected {
  z-index: 1;
}
.b-radio.radio[disabled] {
  opacity: 0.5;
}
.b-radio.radio:hover input[type=radio]:not(:disabled) + .check {
  border-color: #7957d5;
}
.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-white {
  border-color: white;
}
.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-black {
  border-color: #0a0a0a;
}
.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-light {
  border-color: whitesmoke;
}
.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-dark {
  border-color: #363636;
}
.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-primary {
  border-color: #7957d5;
}
.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-link {
  border-color: #7957d5;
}
.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-info {
  border-color: #167df0;
}
.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-success {
  border-color: #48c774;
}
.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-warning {
  border-color: #ffdd57;
}
.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-danger {
  border-color: #f14668;
}
.b-radio.radio.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}
.b-radio.radio.is-medium {
  font-size: 1.25rem;
}
.b-radio.radio.is-large {
  font-size: 1.5rem;
}

.rate {
  align-items: center;
  display: flex;
}
.rate:not(:last-child) {
  margin-bottom: 0.75rem;
}
.rate.is-spaced .rate-item:not(:last-child) {
  margin-right: 0.25rem;
}
.rate.is-disabled .rate-item {
  cursor: initial;
}
.rate.is-disabled .rate-item:hover {
  transform: none;
}
.rate.is-rtl .rate-item {
  order: 1;
}
.rate.is-rtl .rate-text {
  margin-left: 0;
  margin-right: 0.35rem;
}
.rate .rate-item {
  cursor: pointer;
  display: inline-flex;
  position: relative;
  transition: all 0.3s;
}
.rate .rate-item:hover {
  transform: scale(1.1);
}
.rate .rate-item.set-on .icon, .rate .rate-item.set-half .is-half {
  color: #ffd83d;
}
.rate .rate-item.set-half .is-half {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
.rate .icon {
  color: #dbdbdb;
  line-height: 1;
  pointer-events: none;
  width: inherit;
}
.rate .is-half > i {
  position: absolute;
  left: 0;
}
.rate .rate-text {
  font-size: calc(1rem / 1.25);
  margin-left: 0.35rem;
}
.rate .rate-text.is-small {
  font-size: calc(0.75rem / 1.25);
}
.rate .rate-text.is-medium {
  font-size: calc(1.25rem / 1.25);
}
.rate .rate-text.is-large {
  font-size: calc(1.5rem / 1.25);
}

.select select {
  text-rendering: auto !important;
  padding-right: 2.5em;
}
.select select option {
  color: #4a4a4a;
  padding: calc(0.5em - 1px) calc(0.75em - 1px);
}
.select select option:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.select select optgroup {
  color: #b5b5b5;
  font-weight: 400;
  font-style: normal;
  padding: 0.25em 0;
}
.select select[disabled] {
  opacity: 1;
}
.select.is-empty select {
  color: rgba(122, 122, 122, 0.7);
}
.select.is-loading::after {
  top: calc(50% - (1em / 2));
  right: calc((2.5em / 2) - .5em);
}

.b-skeleton {
  display: inline-flex;
  flex-direction: column;
  vertical-align: middle;
  width: 100%;
}
.b-skeleton > .b-skeleton-item {
  background: linear-gradient(90deg, #dbdbdb 25%, rgba(219, 219, 219, 0.5) 50%, #dbdbdb 75%);
  background-size: 400% 100%;
  width: 100%;
}
.b-skeleton > .b-skeleton-item.is-rounded {
  border-radius: 4px;
}
.b-skeleton > .b-skeleton-item::after {
  content: "\xA0";
}
.b-skeleton > .b-skeleton-item + .b-skeleton-item {
  margin-top: 0.5rem;
}
.b-skeleton.is-animated > .b-skeleton-item {
  animation: skeleton-loading 1.5s infinite;
}
.b-skeleton.is-centered {
  align-items: center;
}
.b-skeleton.is-right {
  align-items: flex-end;
}
.b-skeleton + .b-skeleton {
  margin-top: 0.5rem;
}
.b-skeleton > .b-skeleton-item {
  line-height: 1rem;
}
.b-skeleton.is-small > .b-skeleton-item {
  line-height: 0.75rem;
}
.b-skeleton.is-medium > .b-skeleton-item {
  line-height: 1.25rem;
}
.b-skeleton.is-large > .b-skeleton-item {
  line-height: 1.5rem;
}

@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
.b-sidebar .sidebar-content {
  background-color: whitesmoke;
  box-shadow: 5px 0px 13px 3px rgba(10, 10, 10, 0.1);
  width: 260px;
  z-index: 39;
}
.b-sidebar .sidebar-content.is-white {
  background-color: white;
}
.b-sidebar .sidebar-content.is-black {
  background-color: #0a0a0a;
}
.b-sidebar .sidebar-content.is-light {
  background-color: whitesmoke;
}
.b-sidebar .sidebar-content.is-dark {
  background-color: #363636;
}
.b-sidebar .sidebar-content.is-primary {
  background-color: #7957d5;
}
.b-sidebar .sidebar-content.is-link {
  background-color: #7957d5;
}
.b-sidebar .sidebar-content.is-info {
  background-color: #167df0;
}
.b-sidebar .sidebar-content.is-success {
  background-color: #48c774;
}
.b-sidebar .sidebar-content.is-warning {
  background-color: #ffdd57;
}
.b-sidebar .sidebar-content.is-danger {
  background-color: #f14668;
}
.b-sidebar .sidebar-content.is-fixed {
  position: fixed;
  left: 0;
  top: 0;
}
.b-sidebar .sidebar-content.is-fixed.is-right {
  left: auto;
  right: 0;
}
.b-sidebar .sidebar-content.is-absolute {
  position: absolute;
  left: 0;
  top: 0;
}
.b-sidebar .sidebar-content.is-absolute.is-right {
  left: auto;
  right: 0;
}
.b-sidebar .sidebar-content.is-mini {
  width: 80px;
}
.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover {
  transition: width 150ms ease-out;
}
.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-fullwidth) {
  width: 260px;
}
.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-fullwidth).is-mini-expand-fixed {
  position: fixed;
}
.b-sidebar .sidebar-content.is-static {
  position: static;
}
.b-sidebar .sidebar-content.is-absolute, .b-sidebar .sidebar-content.is-static {
  transition: width 150ms ease-out;
}
.b-sidebar .sidebar-content.is-fullwidth {
  width: 100%;
  max-width: 100%;
}
.b-sidebar .sidebar-content.is-fullheight {
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-content: stretch;
}
@media screen and (max-width: 768px) {
  .b-sidebar .sidebar-content.is-mini-mobile {
    width: 80px;
  }
  .b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile) {
    width: 260px;
  }
  .b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile).is-mini-expand-fixed {
    position: fixed;
  }
  .b-sidebar .sidebar-content.is-hidden-mobile {
    width: 0;
    height: 0;
    overflow: hidden;
  }
  .b-sidebar .sidebar-content.is-fullwidth-mobile {
    width: 100%;
    max-width: 100%;
  }
}
.b-sidebar .sidebar-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(10, 10, 10, 0.86);
  position: fixed;
  z-index: 38;
}

.b-slider {
  margin: 1em 0;
  background: transparent;
  width: 100%;
}
.b-slider .b-slider-track {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  background: #dbdbdb;
  border-radius: 4px;
}
.b-slider .b-slider-fill {
  position: absolute;
  height: 100%;
  box-shadow: 0px 0px 0px #7a7a7a;
  background: #dbdbdb;
  border-radius: 4px;
  border: 0px solid #7a7a7a;
  top: 50%;
  transform: translateY(-50%);
}
.b-slider .b-slider-thumb-wrapper {
  display: inline-flex;
  align-items: center;
  position: absolute;
  cursor: grab;
  transform: translate(-50%, -50%);
  top: 50%;
  flex-direction: column;
}
.b-slider .b-slider-thumb-wrapper .b-slider-thumb {
  box-shadow: none;
  border: 1px solid #b5b5b5;
  border-radius: 4px;
  background: white;
}
.b-slider .b-slider-thumb-wrapper .b-slider-thumb:focus {
  transform: scale(1.25);
}
.b-slider .b-slider-thumb-wrapper.is-dragging {
  cursor: grabbing;
}
.b-slider .b-slider-thumb-wrapper.is-dragging .b-slider-thumb {
  transform: scale(1.25);
}
.b-slider .b-slider-thumb-wrapper.has-indicator .b-slider-thumb {
  padding: 16px 10px;
  display: flex;
  align-items: center;
  width: auto;
}
.b-slider.slider-focus {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: -20px;
  margin-bottom: -20px;
  cursor: pointer;
}
.b-slider.is-rounded .b-slider-thumb {
  border-radius: 290486px;
}
.b-slider.is-disabled .b-slider-track {
  cursor: not-allowed;
  opacity: 0.5;
}
.b-slider.is-disabled .b-slider-thumb-wrapper {
  cursor: not-allowed;
}
.b-slider.is-disabled .b-slider-thumb-wrapper .b-slider-thumb {
  transform: scale(1);
}
.b-slider .b-slider-track {
  height: 0.5rem;
}
.b-slider .b-slider-thumb {
  height: 1rem;
  width: 1rem;
}
.b-slider .b-slider-tick {
  height: 0.25rem;
}
.b-slider .b-slider-tick-label {
  font-size: 0.75rem;
  position: absolute;
  top: calc(0.5rem / 2 + 2px);
  left: 50%;
  transform: translateX(-50%);
}
.b-slider.is-small .b-slider-track {
  height: 0.375rem;
}
.b-slider.is-small .b-slider-thumb {
  height: 0.75rem;
  width: 0.75rem;
}
.b-slider.is-small .b-slider-tick {
  height: 0.1875rem;
}
.b-slider.is-small .b-slider-tick-label {
  font-size: 0.75rem;
  position: absolute;
  top: calc(0.375rem / 2 + 2px);
  left: 50%;
  transform: translateX(-50%);
}
.b-slider.is-medium .b-slider-track {
  height: 0.625rem;
}
.b-slider.is-medium .b-slider-thumb {
  height: 1.25rem;
  width: 1.25rem;
}
.b-slider.is-medium .b-slider-tick {
  height: 0.3125rem;
}
.b-slider.is-medium .b-slider-tick-label {
  font-size: 0.75rem;
  position: absolute;
  top: calc(0.625rem / 2 + 2px);
  left: 50%;
  transform: translateX(-50%);
}
.b-slider.is-large .b-slider-track {
  height: 0.75rem;
}
.b-slider.is-large .b-slider-thumb {
  height: 1.5rem;
  width: 1.5rem;
}
.b-slider.is-large .b-slider-tick {
  height: 0.375rem;
}
.b-slider.is-large .b-slider-tick-label {
  font-size: 0.75rem;
  position: absolute;
  top: calc(0.75rem / 2 + 2px);
  left: 50%;
  transform: translateX(-50%);
}
.b-slider.is-white .b-slider-fill {
  background: white !important;
}
.b-slider.is-black .b-slider-fill {
  background: #0a0a0a !important;
}
.b-slider.is-light .b-slider-fill {
  background: whitesmoke !important;
}
.b-slider.is-dark .b-slider-fill {
  background: #363636 !important;
}
.b-slider.is-primary .b-slider-fill {
  background: #7957d5 !important;
}
.b-slider.is-link .b-slider-fill {
  background: #7957d5 !important;
}
.b-slider.is-info .b-slider-fill {
  background: #167df0 !important;
}
.b-slider.is-success .b-slider-fill {
  background: #48c774 !important;
}
.b-slider.is-warning .b-slider-fill {
  background: #ffdd57 !important;
}
.b-slider.is-danger .b-slider-fill {
  background: #f14668 !important;
}
.b-slider .b-slider-tick {
  position: absolute;
  width: 3px;
  transform: translate(-50%, -50%);
  top: 50%;
  background: #b5b5b5;
  border-radius: 4px;
}
.b-slider .b-slider-tick.is-tick-hidden {
  background: transparent;
}

/*
This project is based on
"bulma-steps" (https://github.com/Wikiki/bulma-steps) by
Wikiki (https://github.com/Wikiki) licensed under
MIT (https://github.com/Wikiki/bulma-steps/blob/master/LICENSE)
*/
.b-steps .steps .step-items {
  display: flex;
  flex-wrap: wrap;
}
.b-steps .steps .step-items .step-item {
  margin-top: 0;
  position: relative;
  flex-grow: 1;
  flex-basis: 1em;
}
.b-steps .steps .step-items .step-item .step-link {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #4a4a4a;
}
.b-steps .steps .step-items .step-item .step-link:not(.is-clickable) {
  cursor: not-allowed;
}
.b-steps .steps .step-items .step-item .step-marker {
  align-items: center;
  display: flex;
  border-radius: 4px;
  font-weight: 700;
  justify-content: center;
  background: #b5b5b5;
  color: white;
  border: 0.2em solid #fff;
  z-index: 1;
  overflow: hidden;
}
.b-steps .steps .step-items .step-item.is-white::before, .b-steps .steps .step-items .step-item.is-white::after {
  background: linear-gradient(to left, #dbdbdb 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}
.b-steps .steps .step-items .step-item.is-white.is-active .step-marker {
  background-color: white;
  border-color: white;
  color: white;
}
.b-steps .steps .step-items .step-item.is-white.is-active::before, .b-steps .steps .step-items .step-item.is-white.is-active::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-white.is-previous .step-marker {
  color: #0a0a0a;
  background-color: white;
}
.b-steps .steps .step-items .step-item.is-white.is-previous::before, .b-steps .steps .step-items .step-item.is-white.is-previous::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-black::before, .b-steps .steps .step-items .step-item.is-black::after {
  background: linear-gradient(to left, #dbdbdb 50%, #0a0a0a 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}
.b-steps .steps .step-items .step-item.is-black.is-active .step-marker {
  background-color: white;
  border-color: #0a0a0a;
  color: #0a0a0a;
}
.b-steps .steps .step-items .step-item.is-black.is-active::before, .b-steps .steps .step-items .step-item.is-black.is-active::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-black.is-previous .step-marker {
  color: white;
  background-color: #0a0a0a;
}
.b-steps .steps .step-items .step-item.is-black.is-previous::before, .b-steps .steps .step-items .step-item.is-black.is-previous::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-light::before, .b-steps .steps .step-items .step-item.is-light::after {
  background: linear-gradient(to left, #dbdbdb 50%, whitesmoke 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}
.b-steps .steps .step-items .step-item.is-light.is-active .step-marker {
  background-color: white;
  border-color: whitesmoke;
  color: whitesmoke;
}
.b-steps .steps .step-items .step-item.is-light.is-active::before, .b-steps .steps .step-items .step-item.is-light.is-active::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-light.is-previous .step-marker {
  color: rgba(0, 0, 0, 0.7);
  background-color: whitesmoke;
}
.b-steps .steps .step-items .step-item.is-light.is-previous::before, .b-steps .steps .step-items .step-item.is-light.is-previous::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-dark::before, .b-steps .steps .step-items .step-item.is-dark::after {
  background: linear-gradient(to left, #dbdbdb 50%, #363636 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}
.b-steps .steps .step-items .step-item.is-dark.is-active .step-marker {
  background-color: white;
  border-color: #363636;
  color: #363636;
}
.b-steps .steps .step-items .step-item.is-dark.is-active::before, .b-steps .steps .step-items .step-item.is-dark.is-active::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-dark.is-previous .step-marker {
  color: #fff;
  background-color: #363636;
}
.b-steps .steps .step-items .step-item.is-dark.is-previous::before, .b-steps .steps .step-items .step-item.is-dark.is-previous::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-primary::before, .b-steps .steps .step-items .step-item.is-primary::after {
  background: linear-gradient(to left, #dbdbdb 50%, #7957d5 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}
.b-steps .steps .step-items .step-item.is-primary.is-active .step-marker {
  background-color: white;
  border-color: #7957d5;
  color: #7957d5;
}
.b-steps .steps .step-items .step-item.is-primary.is-active::before, .b-steps .steps .step-items .step-item.is-primary.is-active::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-primary.is-previous .step-marker {
  color: #fff;
  background-color: #7957d5;
}
.b-steps .steps .step-items .step-item.is-primary.is-previous::before, .b-steps .steps .step-items .step-item.is-primary.is-previous::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-link::before, .b-steps .steps .step-items .step-item.is-link::after {
  background: linear-gradient(to left, #dbdbdb 50%, #7957d5 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}
.b-steps .steps .step-items .step-item.is-link.is-active .step-marker {
  background-color: white;
  border-color: #7957d5;
  color: #7957d5;
}
.b-steps .steps .step-items .step-item.is-link.is-active::before, .b-steps .steps .step-items .step-item.is-link.is-active::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-link.is-previous .step-marker {
  color: #fff;
  background-color: #7957d5;
}
.b-steps .steps .step-items .step-item.is-link.is-previous::before, .b-steps .steps .step-items .step-item.is-link.is-previous::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-info::before, .b-steps .steps .step-items .step-item.is-info::after {
  background: linear-gradient(to left, #dbdbdb 50%, #167df0 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}
.b-steps .steps .step-items .step-item.is-info.is-active .step-marker {
  background-color: white;
  border-color: #167df0;
  color: #167df0;
}
.b-steps .steps .step-items .step-item.is-info.is-active::before, .b-steps .steps .step-items .step-item.is-info.is-active::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-info.is-previous .step-marker {
  color: #fff;
  background-color: #167df0;
}
.b-steps .steps .step-items .step-item.is-info.is-previous::before, .b-steps .steps .step-items .step-item.is-info.is-previous::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-success::before, .b-steps .steps .step-items .step-item.is-success::after {
  background: linear-gradient(to left, #dbdbdb 50%, #48c774 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}
.b-steps .steps .step-items .step-item.is-success.is-active .step-marker {
  background-color: white;
  border-color: #48c774;
  color: #48c774;
}
.b-steps .steps .step-items .step-item.is-success.is-active::before, .b-steps .steps .step-items .step-item.is-success.is-active::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-success.is-previous .step-marker {
  color: #fff;
  background-color: #48c774;
}
.b-steps .steps .step-items .step-item.is-success.is-previous::before, .b-steps .steps .step-items .step-item.is-success.is-previous::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-warning::before, .b-steps .steps .step-items .step-item.is-warning::after {
  background: linear-gradient(to left, #dbdbdb 50%, #ffdd57 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}
.b-steps .steps .step-items .step-item.is-warning.is-active .step-marker {
  background-color: white;
  border-color: #ffdd57;
  color: #ffdd57;
}
.b-steps .steps .step-items .step-item.is-warning.is-active::before, .b-steps .steps .step-items .step-item.is-warning.is-active::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-warning.is-previous .step-marker {
  color: rgba(0, 0, 0, 0.7);
  background-color: #ffdd57;
}
.b-steps .steps .step-items .step-item.is-warning.is-previous::before, .b-steps .steps .step-items .step-item.is-warning.is-previous::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-danger::before, .b-steps .steps .step-items .step-item.is-danger::after {
  background: linear-gradient(to left, #dbdbdb 50%, #f14668 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}
.b-steps .steps .step-items .step-item.is-danger.is-active .step-marker {
  background-color: white;
  border-color: #f14668;
  color: #f14668;
}
.b-steps .steps .step-items .step-item.is-danger.is-active::before, .b-steps .steps .step-items .step-item.is-danger.is-active::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-danger.is-previous .step-marker {
  color: #fff;
  background-color: #f14668;
}
.b-steps .steps .step-items .step-item.is-danger.is-previous::before, .b-steps .steps .step-items .step-item.is-danger.is-previous::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item .step-marker {
  color: white;
}
.b-steps .steps .step-items .step-item .step-details {
  text-align: center;
  z-index: 1;
}
.b-steps .steps .step-items .step-item:not(:first-child), .b-steps .steps .step-items .step-item:only-child {
  flex-shrink: 1;
}
.b-steps .steps .step-items .step-item:not(:first-child)::before, .b-steps .steps .step-items .step-item:only-child::before {
  content: " ";
  display: block;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: -50%;
}
.b-steps .steps .step-items .step-item:only-child::after {
  content: " ";
  display: block;
  position: absolute;
  height: 0.2em;
  bottom: 0;
}
.b-steps .steps .step-items .step-item:only-child::before, .b-steps .steps .step-items .step-item:only-child::after {
  width: 25%;
  left: 50%;
}
.b-steps .steps .step-items .step-item:only-child::before {
  right: 50%;
  left: auto;
}
.b-steps .steps .step-items .step-item::before, .b-steps .steps .step-items .step-item::after {
  background: linear-gradient(to left, #dbdbdb 50%, #7957d5 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}
.b-steps .steps .step-items .step-item.is-active .step-link {
  cursor: default;
}
.b-steps .steps .step-items .step-item.is-active .step-marker {
  background-color: white;
  border-color: #7957d5;
  color: #7957d5;
}
.b-steps .steps .step-items .step-item.is-active::before, .b-steps .steps .step-items .step-item.is-active::after {
  background-position: left bottom;
}
.b-steps .steps .step-items .step-item.is-previous .step-marker {
  color: white;
  background-color: #7957d5;
}
.b-steps .steps .step-items .step-item.is-previous::before, .b-steps .steps .step-items .step-item.is-previous::after {
  background-position: left bottom;
}
.b-steps .steps + .step-content {
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.b-steps .steps + .step-content .step-item {
  flex-shrink: 0;
  flex-basis: auto;
}
.b-steps .steps + .step-content .step-item:focus {
  outline: none;
}
.b-steps .steps + .step-content.is-transitioning {
  overflow: hidden;
}
.b-steps .steps.is-rounded .step-item .step-marker {
  border-radius: 290486px;
}
.b-steps .steps.is-animated .step-item:not(:first-child)::before, .b-steps .steps.is-animated .step-item:only-child::before {
  transition: background 150ms ease-out;
}
.b-steps .steps.has-label-right .step-items .step-item .step-link, .b-steps .steps.has-label-left .step-items .step-item .step-link {
  flex-direction: row;
}
.b-steps .steps.has-label-right .step-items .step-item .step-link > .step-details, .b-steps .steps.has-label-left .step-items .step-item .step-link > .step-details {
  background-color: white;
  padding: 0.2em;
}
.b-steps .steps.has-label-left .step-items .step-item .step-link {
  flex-direction: row-reverse;
}
.b-steps .steps {
  font-size: 1rem;
  min-height: 2rem;
}
.b-steps .steps .step-items .step-item .step-marker {
  height: 2rem;
  width: 2rem;
}
.b-steps .steps .step-items .step-item .step-marker .icon *, .b-steps .steps .step-items .step-item .step-marker .icon *:before {
  font-size: 1rem;
}
.b-steps .steps .step-items .step-item .step-details .step-title {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1rem;
}
.b-steps .steps .step-items .step-item:not(:first-child)::before, .b-steps .steps .step-items .step-item:only-child::before {
  height: 0.2em;
  top: 1rem;
}
.b-steps .steps .step-items .step-item:only-child::after {
  top: 1rem;
}
@media screen and (max-width: 768px) {
  .b-steps .steps .step-items .step-item::before, .b-steps .steps .step-items .step-item::after, .b-steps .steps .step-items .step-item:not(:first-child)::before {
    top: 1rem;
  }
}
.b-steps.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-vertical > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-vertical > .steps.has-label-right .step-items .step-item:only-child::after {
  left: calc(1rem - 0.1em);
}
.b-steps.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-vertical > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-vertical > .steps.has-label-left .step-items .step-item:only-child::after {
  left: auto;
  right: calc(1rem - 0.1em);
}
.b-steps.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::after {
  left: calc(1rem - 0.1em);
}
.b-steps.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::after {
  left: auto;
  right: calc(1rem - 0.1em);
}
.b-steps.is-small .steps {
  font-size: 0.75rem;
  min-height: 1.5rem;
}
.b-steps.is-small .steps .step-items .step-item .step-marker {
  height: 1.5rem;
  width: 1.5rem;
}
.b-steps.is-small .steps .step-items .step-item .step-marker .icon *, .b-steps.is-small .steps .step-items .step-item .step-marker .icon *:before {
  font-size: 0.75rem;
}
.b-steps.is-small .steps .step-items .step-item .step-details .step-title {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 0.75rem;
}
.b-steps.is-small .steps .step-items .step-item:not(:first-child)::before, .b-steps.is-small .steps .step-items .step-item:only-child::before {
  height: 0.2em;
  top: 0.75rem;
}
.b-steps.is-small .steps .step-items .step-item:only-child::after {
  top: 0.75rem;
}
@media screen and (max-width: 768px) {
  .b-steps.is-small .steps .step-items .step-item::before, .b-steps.is-small .steps .step-items .step-item::after, .b-steps.is-small .steps .step-items .step-item:not(:first-child)::before {
    top: 0.75rem;
  }
}
.b-steps.is-small.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-small.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-small.is-vertical > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-small.is-vertical > .steps.has-label-right .step-items .step-item:only-child::after {
  left: calc(0.75rem - 0.1em);
}
.b-steps.is-small.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-small.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-small.is-vertical > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-small.is-vertical > .steps.has-label-left .step-items .step-item:only-child::after {
  left: auto;
  right: calc(0.75rem - 0.1em);
}
.b-steps.is-small.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-small.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-small.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-small.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::after {
  left: calc(0.75rem - 0.1em);
}
.b-steps.is-small.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-small.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-small.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-small.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::after {
  left: auto;
  right: calc(0.75rem - 0.1em);
}
.b-steps.is-medium .steps {
  font-size: 1.25rem;
  min-height: 2.5rem;
}
.b-steps.is-medium .steps .step-items .step-item .step-marker {
  height: 2.5rem;
  width: 2.5rem;
}
.b-steps.is-medium .steps .step-items .step-item .step-marker .icon *, .b-steps.is-medium .steps .step-items .step-item .step-marker .icon *:before {
  font-size: 1.25rem;
}
.b-steps.is-medium .steps .step-items .step-item .step-details .step-title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.25rem;
}
.b-steps.is-medium .steps .step-items .step-item:not(:first-child)::before, .b-steps.is-medium .steps .step-items .step-item:only-child::before {
  height: 0.2em;
  top: 1.25rem;
}
.b-steps.is-medium .steps .step-items .step-item:only-child::after {
  top: 1.25rem;
}
@media screen and (max-width: 768px) {
  .b-steps.is-medium .steps .step-items .step-item::before, .b-steps.is-medium .steps .step-items .step-item::after, .b-steps.is-medium .steps .step-items .step-item:not(:first-child)::before {
    top: 1.25rem;
  }
}
.b-steps.is-medium.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-medium.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-medium.is-vertical > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-medium.is-vertical > .steps.has-label-right .step-items .step-item:only-child::after {
  left: calc(1.25rem - 0.1em);
}
.b-steps.is-medium.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-medium.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-medium.is-vertical > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-medium.is-vertical > .steps.has-label-left .step-items .step-item:only-child::after {
  left: auto;
  right: calc(1.25rem - 0.1em);
}
.b-steps.is-medium.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::after {
  left: calc(1.25rem - 0.1em);
}
.b-steps.is-medium.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::after {
  left: auto;
  right: calc(1.25rem - 0.1em);
}
.b-steps.is-large .steps {
  font-size: 1.5rem;
  min-height: 3rem;
}
.b-steps.is-large .steps .step-items .step-item .step-marker {
  height: 3rem;
  width: 3rem;
}
.b-steps.is-large .steps .step-items .step-item .step-marker .icon *, .b-steps.is-large .steps .step-items .step-item .step-marker .icon *:before {
  font-size: 1.5rem;
}
.b-steps.is-large .steps .step-items .step-item .step-details .step-title {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.5rem;
}
.b-steps.is-large .steps .step-items .step-item:not(:first-child)::before, .b-steps.is-large .steps .step-items .step-item:only-child::before {
  height: 0.2em;
  top: 1.5rem;
}
.b-steps.is-large .steps .step-items .step-item:only-child::after {
  top: 1.5rem;
}
@media screen and (max-width: 768px) {
  .b-steps.is-large .steps .step-items .step-item::before, .b-steps.is-large .steps .step-items .step-item::after, .b-steps.is-large .steps .step-items .step-item:not(:first-child)::before {
    top: 1.5rem;
  }
}
.b-steps.is-large.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-large.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-large.is-vertical > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-large.is-vertical > .steps.has-label-right .step-items .step-item:only-child::after {
  left: calc(1.5rem - 0.1em);
}
.b-steps.is-large.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-large.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-large.is-vertical > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-large.is-vertical > .steps.has-label-left .step-items .step-item:only-child::after {
  left: auto;
  right: calc(1.5rem - 0.1em);
}
.b-steps.is-large.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-large.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-large.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-large.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::after {
  left: calc(1.5rem - 0.1em);
}
.b-steps.is-large.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-large.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-large.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-large.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::after {
  left: auto;
  right: calc(1.5rem - 0.1em);
}
.b-steps.is-vertical {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.b-steps.is-vertical > .steps .step-items {
  height: 100%;
  flex-direction: column;
  border-bottom-color: transparent;
}
.b-steps.is-vertical > .steps .step-items .step-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
}
.b-steps.is-vertical > .steps .step-items .step-item::before, .b-steps.is-vertical > .steps .step-items .step-item::after {
  background: linear-gradient(to top, #dbdbdb 50%, #7957d5 50%);
  background-size: 100% 200%;
  background-position: left bottom;
}
.b-steps.is-vertical > .steps .step-items .step-item.is-white::before, .b-steps.is-vertical > .steps .step-items .step-item.is-white::after {
  background: linear-gradient(to top, #dbdbdb 50%, white 50%);
  background-size: 100% 200%;
  background-position: left bottom;
}
.b-steps.is-vertical > .steps .step-items .step-item.is-black::before, .b-steps.is-vertical > .steps .step-items .step-item.is-black::after {
  background: linear-gradient(to top, #dbdbdb 50%, #0a0a0a 50%);
  background-size: 100% 200%;
  background-position: left bottom;
}
.b-steps.is-vertical > .steps .step-items .step-item.is-light::before, .b-steps.is-vertical > .steps .step-items .step-item.is-light::after {
  background: linear-gradient(to top, #dbdbdb 50%, whitesmoke 50%);
  background-size: 100% 200%;
  background-position: left bottom;
}
.b-steps.is-vertical > .steps .step-items .step-item.is-dark::before, .b-steps.is-vertical > .steps .step-items .step-item.is-dark::after {
  background: linear-gradient(to top, #dbdbdb 50%, #363636 50%);
  background-size: 100% 200%;
  background-position: left bottom;
}
.b-steps.is-vertical > .steps .step-items .step-item.is-primary::before, .b-steps.is-vertical > .steps .step-items .step-item.is-primary::after {
  background: linear-gradient(to top, #dbdbdb 50%, #7957d5 50%);
  background-size: 100% 200%;
  background-position: left bottom;
}
.b-steps.is-vertical > .steps .step-items .step-item.is-link::before, .b-steps.is-vertical > .steps .step-items .step-item.is-link::after {
  background: linear-gradient(to top, #dbdbdb 50%, #7957d5 50%);
  background-size: 100% 200%;
  background-position: left bottom;
}
.b-steps.is-vertical > .steps .step-items .step-item.is-info::before, .b-steps.is-vertical > .steps .step-items .step-item.is-info::after {
  background: linear-gradient(to top, #dbdbdb 50%, #167df0 50%);
  background-size: 100% 200%;
  background-position: left bottom;
}
.b-steps.is-vertical > .steps .step-items .step-item.is-success::before, .b-steps.is-vertical > .steps .step-items .step-item.is-success::after {
  background: linear-gradient(to top, #dbdbdb 50%, #48c774 50%);
  background-size: 100% 200%;
  background-position: left bottom;
}
.b-steps.is-vertical > .steps .step-items .step-item.is-warning::before, .b-steps.is-vertical > .steps .step-items .step-item.is-warning::after {
  background: linear-gradient(to top, #dbdbdb 50%, #ffdd57 50%);
  background-size: 100% 200%;
  background-position: left bottom;
}
.b-steps.is-vertical > .steps .step-items .step-item.is-danger::before, .b-steps.is-vertical > .steps .step-items .step-item.is-danger::after {
  background: linear-gradient(to top, #dbdbdb 50%, #f14668 50%);
  background-size: 100% 200%;
  background-position: left bottom;
}
.b-steps.is-vertical > .steps .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical > .steps .step-items .step-item:only-child::before {
  height: 100%;
  width: 0.2em;
  top: -50%;
  left: calc(50% - 0.1em);
}
.b-steps.is-vertical > .steps .step-items .step-item.is-active::before, .b-steps.is-vertical > .steps .step-items .step-item.is-active::after, .b-steps.is-vertical > .steps .step-items .step-item.is-previous::before, .b-steps.is-vertical > .steps .step-items .step-item.is-previous::after {
  background-position: right top;
}
.b-steps.is-vertical > .steps .step-items .step-item:only-child::before {
  top: 50%;
}
.b-steps.is-vertical > .steps .step-items .step-item:only-child::after {
  width: 0.2em;
  top: auto;
  bottom: 50%;
}
.b-steps.is-vertical > .steps .step-items .step-item:only-child::before, .b-steps.is-vertical > .steps .step-items .step-item:only-child::after {
  height: 25%;
}
.b-steps.is-vertical > .steps.has-label-right .step-items .step-item {
  justify-content: flex-start;
}
.b-steps.is-vertical > .steps.has-label-left .step-items .step-item {
  justify-content: flex-end;
}
.b-steps.is-vertical > .steps:not(.has-label-right):not(.has-label-left) .step-items .step-item .step-link > .step-details {
  background-color: white;
}
.b-steps.is-vertical > .step-content {
  flex-grow: 1;
}
.b-steps.is-vertical > .step-navigation {
  flex-basis: 100%;
}
.b-steps.is-vertical.is-right {
  flex-direction: row-reverse;
}
@media screen and (max-width: 768px) {
  .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(.is-active) {
    display: none;
  }
  .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item::before, .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item::after, .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child)::before {
    content: " ";
    display: block;
    position: absolute;
    height: 0.2em;
    width: 25%;
    bottom: 0;
    left: 50%;
  }
  .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item::before, .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child)::before {
    right: 50%;
    left: auto;
  }
  .b-steps:not(.is-vertical) .steps.mobile-compact .step-items .step-item:not(.is-active) .step-details {
    display: none;
  }
}

.switch {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-right: 0.5em;
}
.switch + .switch:last-child {
  margin-right: 0;
}
.switch input[type=checkbox] {
  position: absolute;
  left: 0;
  opacity: 0;
  outline: none;
  z-index: -1;
}
.switch input[type=checkbox] + .check {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 2.75em;
  height: 1.575em;
  padding: 0.2em;
  background: #b5b5b5;
  border-radius: 4px;
  transition: background 150ms ease-out, box-shadow 150ms ease-out;
}
.switch input[type=checkbox] + .check.is-white-passive, .switch input[type=checkbox] + .check:hover {
  background: white;
}
.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {
  background: "pink";
}
.switch input[type=checkbox] + .check.is-black-passive, .switch input[type=checkbox] + .check:hover {
  background: #0a0a0a;
}
.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {
  background: "pink";
}
.switch input[type=checkbox] + .check.is-light-passive, .switch input[type=checkbox] + .check:hover {
  background: whitesmoke;
}
.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {
  background: "pink";
}
.switch input[type=checkbox] + .check.is-dark-passive, .switch input[type=checkbox] + .check:hover {
  background: #363636;
}
.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {
  background: "pink";
}
.switch input[type=checkbox] + .check.is-primary-passive, .switch input[type=checkbox] + .check:hover {
  background: #7957d5;
}
.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {
  background: "pink";
}
.switch input[type=checkbox] + .check.is-link-passive, .switch input[type=checkbox] + .check:hover {
  background: #7957d5;
}
.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {
  background: "pink";
}
.switch input[type=checkbox] + .check.is-info-passive, .switch input[type=checkbox] + .check:hover {
  background: #167df0;
}
.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {
  background: "pink";
}
.switch input[type=checkbox] + .check.is-success-passive, .switch input[type=checkbox] + .check:hover {
  background: #48c774;
}
.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {
  background: "pink";
}
.switch input[type=checkbox] + .check.is-warning-passive, .switch input[type=checkbox] + .check:hover {
  background: #ffdd57;
}
.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {
  background: "pink";
}
.switch input[type=checkbox] + .check.is-danger-passive, .switch input[type=checkbox] + .check:hover {
  background: #f14668;
}
.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {
  background: "pink";
}
.switch input[type=checkbox] + .check:before {
  content: "";
  display: block;
  border-radius: 4px;
  width: 1.175em;
  height: 1.175em;
  background: whitesmoke;
  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
  transition: transform 150ms ease-out;
  will-change: transform;
  transform-origin: left;
}
.switch input[type=checkbox] + .check.is-elastic:before {
  transform: scaleX(1.5);
  border-radius: 4px;
}
.switch input[type=checkbox]:checked + .check {
  background: #7957d5;
}
.switch input[type=checkbox]:checked + .check.is-white {
  background: white;
}
.switch input[type=checkbox]:checked + .check.is-black {
  background: #0a0a0a;
}
.switch input[type=checkbox]:checked + .check.is-light {
  background: whitesmoke;
}
.switch input[type=checkbox]:checked + .check.is-dark {
  background: #363636;
}
.switch input[type=checkbox]:checked + .check.is-primary {
  background: #7957d5;
}
.switch input[type=checkbox]:checked + .check.is-link {
  background: #7957d5;
}
.switch input[type=checkbox]:checked + .check.is-info {
  background: #167df0;
}
.switch input[type=checkbox]:checked + .check.is-success {
  background: #48c774;
}
.switch input[type=checkbox]:checked + .check.is-warning {
  background: #ffdd57;
}
.switch input[type=checkbox]:checked + .check.is-danger {
  background: #f14668;
}
.switch input[type=checkbox]:checked + .check:before {
  transform: translate3d(100%, 0, 0);
}
.switch input[type=checkbox]:checked + .check.is-elastic:before {
  transform: translate3d(50%, 0, 0) scaleX(1.5);
}
.switch input[type=checkbox]:focus, .switch input[type=checkbox]:active {
  outline: none;
}
.switch input[type=checkbox]:focus + .check, .switch input[type=checkbox]:active + .check {
  box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.6);
}
.switch input[type=checkbox]:focus + .check.is-white-passive, .switch input[type=checkbox]:active + .check.is-white-passive {
  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);
}
.switch input[type=checkbox]:focus + .check.is-black-passive, .switch input[type=checkbox]:active + .check.is-black-passive {
  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);
}
.switch input[type=checkbox]:focus + .check.is-light-passive, .switch input[type=checkbox]:active + .check.is-light-passive {
  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);
}
.switch input[type=checkbox]:focus + .check.is-dark-passive, .switch input[type=checkbox]:active + .check.is-dark-passive {
  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);
}
.switch input[type=checkbox]:focus + .check.is-primary-passive, .switch input[type=checkbox]:active + .check.is-primary-passive {
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);
}
.switch input[type=checkbox]:focus + .check.is-link-passive, .switch input[type=checkbox]:active + .check.is-link-passive {
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);
}
.switch input[type=checkbox]:focus + .check.is-info-passive, .switch input[type=checkbox]:active + .check.is-info-passive {
  box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);
}
.switch input[type=checkbox]:focus + .check.is-success-passive, .switch input[type=checkbox]:active + .check.is-success-passive {
  box-shadow: 0 0 0.5em rgba(72, 199, 116, 0.8);
}
.switch input[type=checkbox]:focus + .check.is-warning-passive, .switch input[type=checkbox]:active + .check.is-warning-passive {
  box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.8);
}
.switch input[type=checkbox]:focus + .check.is-danger-passive, .switch input[type=checkbox]:active + .check.is-danger-passive {
  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);
}
.switch input[type=checkbox]:focus:checked + .check, .switch input[type=checkbox]:active:checked + .check {
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);
}
.switch input[type=checkbox]:focus:checked + .check.is-white, .switch input[type=checkbox]:active:checked + .check.is-white {
  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);
}
.switch input[type=checkbox]:focus:checked + .check.is-black, .switch input[type=checkbox]:active:checked + .check.is-black {
  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);
}
.switch input[type=checkbox]:focus:checked + .check.is-light, .switch input[type=checkbox]:active:checked + .check.is-light {
  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);
}
.switch input[type=checkbox]:focus:checked + .check.is-dark, .switch input[type=checkbox]:active:checked + .check.is-dark {
  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);
}
.switch input[type=checkbox]:focus:checked + .check.is-primary, .switch input[type=checkbox]:active:checked + .check.is-primary {
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);
}
.switch input[type=checkbox]:focus:checked + .check.is-link, .switch input[type=checkbox]:active:checked + .check.is-link {
  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);
}
.switch input[type=checkbox]:focus:checked + .check.is-info, .switch input[type=checkbox]:active:checked + .check.is-info {
  box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);
}
.switch input[type=checkbox]:focus:checked + .check.is-success, .switch input[type=checkbox]:active:checked + .check.is-success {
  box-shadow: 0 0 0.5em rgba(72, 199, 116, 0.8);
}
.switch input[type=checkbox]:focus:checked + .check.is-warning, .switch input[type=checkbox]:active:checked + .check.is-warning {
  box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.8);
}
.switch input[type=checkbox]:focus:checked + .check.is-danger, .switch input[type=checkbox]:active:checked + .check.is-danger {
  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);
}
.switch.has-left-label {
  flex-direction: row-reverse;
}
.switch.has-left-label .control-label {
  padding-right: calc(0.75em - 1px);
}
.switch:not(.has-left-label) .control-label {
  padding-left: calc(0.75em - 1px);
}
.switch:hover input[type=checkbox] + .check {
  background: rgba(181, 181, 181, 0.9);
}
.switch:hover input[type=checkbox] + .check.is-white-passive {
  background: rgba(255, 255, 255, 0.9);
}
.switch:hover input[type=checkbox] + .check.is-black-passive {
  background: rgba(10, 10, 10, 0.9);
}
.switch:hover input[type=checkbox] + .check.is-light-passive {
  background: rgba(245, 245, 245, 0.9);
}
.switch:hover input[type=checkbox] + .check.is-dark-passive {
  background: rgba(54, 54, 54, 0.9);
}
.switch:hover input[type=checkbox] + .check.is-primary-passive {
  background: rgba(121, 87, 213, 0.9);
}
.switch:hover input[type=checkbox] + .check.is-link-passive {
  background: rgba(121, 87, 213, 0.9);
}
.switch:hover input[type=checkbox] + .check.is-info-passive {
  background: rgba(22, 125, 240, 0.9);
}
.switch:hover input[type=checkbox] + .check.is-success-passive {
  background: rgba(72, 199, 116, 0.9);
}
.switch:hover input[type=checkbox] + .check.is-warning-passive {
  background: rgba(255, 221, 87, 0.9);
}
.switch:hover input[type=checkbox] + .check.is-danger-passive {
  background: rgba(241, 70, 104, 0.9);
}
.switch:hover input[type=checkbox]:checked + .check {
  background: rgba(121, 87, 213, 0.9);
}
.switch:hover input[type=checkbox]:checked + .check.is-white {
  background: rgba(255, 255, 255, 0.9);
}
.switch:hover input[type=checkbox]:checked + .check.is-black {
  background: rgba(10, 10, 10, 0.9);
}
.switch:hover input[type=checkbox]:checked + .check.is-light {
  background: rgba(245, 245, 245, 0.9);
}
.switch:hover input[type=checkbox]:checked + .check.is-dark {
  background: rgba(54, 54, 54, 0.9);
}
.switch:hover input[type=checkbox]:checked + .check.is-primary {
  background: rgba(121, 87, 213, 0.9);
}
.switch:hover input[type=checkbox]:checked + .check.is-link {
  background: rgba(121, 87, 213, 0.9);
}
.switch:hover input[type=checkbox]:checked + .check.is-info {
  background: rgba(22, 125, 240, 0.9);
}
.switch:hover input[type=checkbox]:checked + .check.is-success {
  background: rgba(72, 199, 116, 0.9);
}
.switch:hover input[type=checkbox]:checked + .check.is-warning {
  background: rgba(255, 221, 87, 0.9);
}
.switch:hover input[type=checkbox]:checked + .check.is-danger {
  background: rgba(241, 70, 104, 0.9);
}
.switch.is-rounded input[type=checkbox] + .check {
  border-radius: 290486px;
}
.switch.is-rounded input[type=checkbox] + .check:before {
  border-radius: 290486px;
}
.switch.is-rounded input[type=checkbox].is-elastic:before {
  transform: scaleX(1.5);
  border-radius: 290486px;
}
.switch.is-outlined input[type=checkbox] + .check {
  background: transparent;
  border: 0.1rem solid #b5b5b5;
}
.switch.is-outlined input[type=checkbox] + .check.is-white-passive {
  border: 0.1rem solid rgba(255, 255, 255, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-white-passive:before {
  background: white;
}
.switch.is-outlined input[type=checkbox] + .check.is-white-passive:hover {
  border-color: rgba(255, 255, 255, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-black-passive {
  border: 0.1rem solid rgba(10, 10, 10, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-black-passive:before {
  background: #0a0a0a;
}
.switch.is-outlined input[type=checkbox] + .check.is-black-passive:hover {
  border-color: rgba(10, 10, 10, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-light-passive {
  border: 0.1rem solid rgba(245, 245, 245, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-light-passive:before {
  background: whitesmoke;
}
.switch.is-outlined input[type=checkbox] + .check.is-light-passive:hover {
  border-color: rgba(245, 245, 245, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-dark-passive {
  border: 0.1rem solid rgba(54, 54, 54, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-dark-passive:before {
  background: #363636;
}
.switch.is-outlined input[type=checkbox] + .check.is-dark-passive:hover {
  border-color: rgba(54, 54, 54, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-primary-passive {
  border: 0.1rem solid rgba(121, 87, 213, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-primary-passive:before {
  background: #7957d5;
}
.switch.is-outlined input[type=checkbox] + .check.is-primary-passive:hover {
  border-color: rgba(121, 87, 213, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-link-passive {
  border: 0.1rem solid rgba(121, 87, 213, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-link-passive:before {
  background: #7957d5;
}
.switch.is-outlined input[type=checkbox] + .check.is-link-passive:hover {
  border-color: rgba(121, 87, 213, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-info-passive {
  border: 0.1rem solid rgba(22, 125, 240, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-info-passive:before {
  background: #167df0;
}
.switch.is-outlined input[type=checkbox] + .check.is-info-passive:hover {
  border-color: rgba(22, 125, 240, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-success-passive {
  border: 0.1rem solid rgba(72, 199, 116, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-success-passive:before {
  background: #48c774;
}
.switch.is-outlined input[type=checkbox] + .check.is-success-passive:hover {
  border-color: rgba(72, 199, 116, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-warning-passive {
  border: 0.1rem solid rgba(255, 221, 87, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-warning-passive:before {
  background: #ffdd57;
}
.switch.is-outlined input[type=checkbox] + .check.is-warning-passive:hover {
  border-color: rgba(255, 221, 87, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-danger-passive {
  border: 0.1rem solid rgba(241, 70, 104, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check.is-danger-passive:before {
  background: #f14668;
}
.switch.is-outlined input[type=checkbox] + .check.is-danger-passive:hover {
  border-color: rgba(241, 70, 104, 0.9);
}
.switch.is-outlined input[type=checkbox] + .check:before {
  background: #b5b5b5;
}
.switch.is-outlined input[type=checkbox]:checked + .check {
  border-color: #7957d5;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-white {
  background: transparent;
  border-color: white;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-white:before {
  background: white;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-black {
  background: transparent;
  border-color: #0a0a0a;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-black:before {
  background: #0a0a0a;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-light {
  background: transparent;
  border-color: whitesmoke;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-light:before {
  background: whitesmoke;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-dark {
  background: transparent;
  border-color: #363636;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-dark:before {
  background: #363636;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-primary {
  background: transparent;
  border-color: #7957d5;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-primary:before {
  background: #7957d5;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-link {
  background: transparent;
  border-color: #7957d5;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-link:before {
  background: #7957d5;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-info {
  background: transparent;
  border-color: #167df0;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-info:before {
  background: #167df0;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-success {
  background: transparent;
  border-color: #48c774;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-success:before {
  background: #48c774;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-warning {
  background: transparent;
  border-color: #ffdd57;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-warning:before {
  background: #ffdd57;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-danger {
  background: transparent;
  border-color: #f14668;
}
.switch.is-outlined input[type=checkbox]:checked + .check.is-danger:before {
  background: #f14668;
}
.switch.is-outlined input[type=checkbox]:checked + .check:before {
  background: #7957d5;
}
.switch.is-outlined:hover input[type=checkbox] + .check {
  background: transparent;
  border-color: rgba(181, 181, 181, 0.9);
}
.switch.is-outlined:hover input[type=checkbox]:checked + .check {
  background: transparent;
  border-color: rgba(121, 87, 213, 0.9);
}
.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-white {
  border-color: rgba(255, 255, 255, 0.9);
}
.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-black {
  border-color: rgba(10, 10, 10, 0.9);
}
.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-light {
  border-color: rgba(245, 245, 245, 0.9);
}
.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-dark {
  border-color: rgba(54, 54, 54, 0.9);
}
.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-primary {
  border-color: rgba(121, 87, 213, 0.9);
}
.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-link {
  border-color: rgba(121, 87, 213, 0.9);
}
.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-info {
  border-color: rgba(22, 125, 240, 0.9);
}
.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-success {
  border-color: rgba(72, 199, 116, 0.9);
}
.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-warning {
  border-color: rgba(255, 221, 87, 0.9);
}
.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-danger {
  border-color: rgba(241, 70, 104, 0.9);
}
.switch.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}
.switch.is-medium {
  font-size: 1.25rem;
}
.switch.is-large {
  font-size: 1.5rem;
}
.switch[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
  color: #7a7a7a;
}

.table-wrapper .table {
  margin-bottom: 0;
}
.table-wrapper:not(:last-child) {
  margin-bottom: 1.5rem;
}
@media screen and (max-width: 1023px) {
  .table-wrapper {
    overflow-x: auto;
  }
}

.b-table {
  transition: opacity 86ms ease-out;
}
@media screen and (min-width: 769px), print {
  .b-table .table-mobile-sort {
    display: none;
  }
}
.b-table .icon {
  transition: transform 150ms ease-out, opacity 86ms ease-out;
}
.b-table .icon.is-desc {
  transform: rotate(180deg);
}
.b-table .icon.is-expanded {
  transform: rotate(90deg);
}
.b-table .sort-icon.icon.is-desc {
  transform: rotate(180deg) translateY(-50%) !important;
}
.b-table .table {
  width: 100%;
  border: 1px solid transparent;
  border-radius: 4px;
  border-collapse: separate;
}
.b-table .table th {
  font-weight: 600;
}
.b-table .table th .th-wrap {
  display: flex;
  align-items: center;
}
.b-table .table th .th-wrap .icon {
  margin-left: 0.5rem;
  margin-right: 0;
  font-size: 1rem;
}
.b-table .table th .th-wrap.is-numeric {
  flex-direction: row-reverse;
  text-align: right;
}
.b-table .table th .th-wrap.is-numeric .icon {
  margin-left: 0;
  margin-right: 0.5rem;
}
.b-table .table th .th-wrap.is-centered {
  justify-content: center;
  text-align: center;
}
.b-table .table th.is-current-sort {
  border-color: #7a7a7a;
  font-weight: 700;
}
.b-table .table th.is-sortable:hover {
  border-color: #7a7a7a;
}
.b-table .table th.is-sortable, .b-table .table th.is-sortable .th-wrap {
  cursor: pointer;
}
.b-table .table th.is-sortable .is-relative, .b-table .table th.is-sortable .th-wrap .is-relative {
  position: absolute;
}
.b-table .table th .sort-icon, .b-table .table th .multi-sort-cancel-icon {
  position: absolute;
  bottom: 50%;
  left: 100%;
  transform: translateY(50%);
}
.b-table .table th .multi-sort-cancel-icon {
  margin-left: 10px;
}
.b-table .table th.is-sticky {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  z-index: 3 !important;
  background: transparent;
}
.b-table .table tr.is-selected .checkbox input:checked + .check {
  background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%237957d5' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
}
.b-table .table tr.is-selected .checkbox input + .check {
  border-color: #fff;
}
.b-table .table tr.is-empty:hover {
  background-color: transparent;
}
.b-table .table .chevron-cell {
  vertical-align: middle;
}
.b-table .table .chevron-cell > a {
  color: #7957d5 !important;
}
.b-table .table .checkbox-cell {
  width: 40px;
}
.b-table .table .checkbox-cell .checkbox {
  vertical-align: middle;
}
.b-table .table .checkbox-cell .checkbox .check {
  transition: none;
}
.b-table .table tr.detail {
  box-shadow: inset 0 1px 3px #dbdbdb;
  background: #fafafa;
}
.b-table .table tr.detail .detail-container {
  padding: 1rem;
}
.b-table .table:focus {
  border-color: #7957d5;
  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
}
.b-table .table.is-bordered th.is-current-sort,
.b-table .table.is-bordered th.is-sortable:hover {
  border-color: #dbdbdb;
  background: whitesmoke;
}
.b-table .table td.is-sticky {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  z-index: 1;
  background: white;
}
.b-table .table.is-striped tbody tr:not(.is-selected):nth-child(even) td.is-sticky {
  background: #fafafa;
}
.b-table .level:not(.top) {
  padding-bottom: 1.5rem;
}
.b-table .table-wrapper {
  position: relative;
}
.b-table .table-wrapper.has-sticky-header {
  height: 300px;
  overflow-y: auto;
}
@media screen and (max-width: 768px) {
  .b-table .table-wrapper.has-sticky-header.has-mobile-cards {
    height: initial !important;
    overflow-y: initial !important;
  }
}
.b-table .table-wrapper.has-sticky-header tr:first-child th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  background: white;
}
@media screen and (max-width: 768px) {
  .b-table .table-wrapper.has-mobile-cards .table {
    background-color: transparent;
  }
  .b-table .table-wrapper.has-mobile-cards thead tr {
    box-shadow: none;
    border-width: 0;
  }
  .b-table .table-wrapper.has-mobile-cards thead tr th {
    display: none;
  }
  .b-table .table-wrapper.has-mobile-cards thead tr .checkbox-cell {
    display: block;
    width: 100%;
    text-align: right;
    margin-bottom: 1rem;
    border: 0;
  }
  .b-table .table-wrapper.has-mobile-cards tfoot th {
    border: 0;
    display: inherit;
  }
  .b-table .table-wrapper.has-mobile-cards tr {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    max-width: 100%;
    position: relative;
    display: block;
  }
  .b-table .table-wrapper.has-mobile-cards tr td {
    border: 0;
    display: inherit;
  }
  .b-table .table-wrapper.has-mobile-cards tr td:last-child {
    border-bottom: 0;
  }
  .b-table .table-wrapper.has-mobile-cards tr:not(:last-child) {
    margin-bottom: 1rem;
  }
  .b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]) {
    background: white;
  }
  .b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]):hover {
    background-color: white;
  }
  .b-table .table-wrapper.has-mobile-cards tr.detail {
    margin-top: -1rem;
  }
  .b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td {
    display: flex;
    width: auto;
    justify-content: space-between;
    text-align: right;
    border-bottom: 1px solid whitesmoke;
  }
  .b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td:before {
    content: attr(data-label);
    font-weight: 600;
    padding-right: 0.5em;
    text-align: left;
  }
}
.b-table .table-wrapper.is-card-list .table {
  background-color: transparent;
}
.b-table .table-wrapper.is-card-list thead tr {
  box-shadow: none;
  border-width: 0;
}
.b-table .table-wrapper.is-card-list thead tr th {
  display: none;
}
.b-table .table-wrapper.is-card-list thead tr .checkbox-cell {
  display: block;
  width: 100%;
  text-align: right;
  margin-bottom: 1rem;
  border: 0;
}
.b-table .table-wrapper.is-card-list tfoot th {
  border: 0;
  display: inherit;
}
.b-table .table-wrapper.is-card-list tr {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  max-width: 100%;
  position: relative;
  display: block;
}
.b-table .table-wrapper.is-card-list tr td {
  border: 0;
  display: inherit;
}
.b-table .table-wrapper.is-card-list tr td:last-child {
  border-bottom: 0;
}
.b-table .table-wrapper.is-card-list tr:not(:last-child) {
  margin-bottom: 1rem;
}
.b-table .table-wrapper.is-card-list tr:not([class*=is-]) {
  background: white;
}
.b-table .table-wrapper.is-card-list tr:not([class*=is-]):hover {
  background-color: white;
}
.b-table .table-wrapper.is-card-list tr.detail {
  margin-top: -1rem;
}
.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td {
  display: flex;
  width: auto;
  justify-content: space-between;
  text-align: right;
  border-bottom: 1px solid whitesmoke;
}
.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td:before {
  content: attr(data-label);
  font-weight: 600;
  padding-right: 0.5em;
  text-align: left;
}

.b-tabs .tabs {
  margin-bottom: 0;
  flex-shrink: 0;
}
.b-tabs .tabs li a:focus {
  outline: none;
  border-bottom-color: #7957d5;
}
.b-tabs .tabs li:not(.is-active) a:focus {
  border-bottom-color: #363636;
}
.b-tabs .tabs li.is-disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
}
.b-tabs .tabs.is-boxed li a:focus {
  background-color: white;
  border-bottom-color: transparent;
}
.b-tabs .tabs.is-boxed li:not(.is-active) a:focus {
  background-color: whitesmoke;
  border-bottom-color: #dbdbdb;
}
.b-tabs .tabs.is-toggle li a:focus {
  background-color: #7957d5;
  border-color: #7957d5;
}
.b-tabs .tabs.is-toggle li:not(.is-active) a:focus {
  background-color: whitesmoke;
  border-color: #b5b5b5;
}
.b-tabs .tab-content {
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.b-tabs .tab-content .tab-item {
  flex-shrink: 0;
  flex-basis: auto;
}
.b-tabs .tab-content .tab-item:focus {
  outline: none;
}
.b-tabs .tab-content.is-transitioning {
  overflow: hidden;
}
.b-tabs:not(:last-child) {
  margin-bottom: 1.5rem;
}
.b-tabs.is-fullwidth {
  width: 100%;
}
.b-tabs.is-vertical {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.b-tabs.is-vertical > .tabs ul {
  flex-direction: column;
  border-bottom-color: transparent;
}
.b-tabs.is-vertical > .tabs ul li {
  width: 100%;
}
.b-tabs.is-vertical > .tabs ul li a {
  justify-content: left;
}
.b-tabs.is-vertical > .tabs.is-boxed li a {
  border-bottom-color: transparent !important;
  border-right-color: #dbdbdb !important;
  border-radius: 4px 0 0 4px;
}
.b-tabs.is-vertical > .tabs.is-boxed li.is-active a {
  border-bottom-color: #dbdbdb !important;
  border-right-color: transparent !important;
}
.b-tabs.is-vertical > .tabs.is-toggle li + li {
  margin-left: 0;
}
.b-tabs.is-vertical > .tabs.is-toggle li:first-child a {
  border-radius: 4px 4px 0 0;
}
.b-tabs.is-vertical > .tabs.is-toggle li:last-child a {
  border-radius: 0 0 4px 4px;
}
.b-tabs.is-vertical > .tabs.is-fullwidth li a {
  height: 100%;
}
.b-tabs.is-vertical > .tab-content {
  flex-grow: 1;
}
.b-tabs.is-vertical.is-right {
  flex-direction: row-reverse;
}
.b-tabs.is-vertical.is-right > .tabs ul a {
  flex-direction: row-reverse;
}
.b-tabs.is-vertical.is-right > .tabs ul a .icon:first-child {
  margin-right: 0;
  margin-left: 0.5em;
}
.b-tabs.is-vertical.is-right > .tabs.is-boxed li a {
  border-bottom-color: transparent !important;
  border-right-color: transparent !important;
  border-left-color: #dbdbdb !important;
  border-radius: 0 4px 4px 0;
}
.b-tabs.is-vertical.is-right > .tabs.is-boxed li.is-active a {
  border-bottom-color: #dbdbdb !important;
  border-right-color: #dbdbdb !important;
  border-left-color: transparent !important;
}
.b-tabs.is-multiline > .tabs ul {
  flex-wrap: wrap;
  flex-shrink: 1;
}

.tag .has-ellipsis {
  max-width: 10em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tag .delete.is-white, .tag.is-delete.is-white, .tag.has-delete-icon.is-white {
  background: white;
}
.tag .delete.is-white:hover, .tag.is-delete.is-white:hover, .tag.has-delete-icon.is-white:hover {
  background-color: #e6e6e6;
  text-decoration: none;
}
.tag .delete.is-black, .tag.is-delete.is-black, .tag.has-delete-icon.is-black {
  background: #0a0a0a;
}
.tag .delete.is-black:hover, .tag.is-delete.is-black:hover, .tag.has-delete-icon.is-black:hover {
  background-color: black;
  text-decoration: none;
}
.tag .delete.is-light, .tag.is-delete.is-light, .tag.has-delete-icon.is-light {
  background: whitesmoke;
}
.tag .delete.is-light:hover, .tag.is-delete.is-light:hover, .tag.has-delete-icon.is-light:hover {
  background-color: #dbdbdb;
  text-decoration: none;
}
.tag .delete.is-dark, .tag.is-delete.is-dark, .tag.has-delete-icon.is-dark {
  background: #363636;
}
.tag .delete.is-dark:hover, .tag.is-delete.is-dark:hover, .tag.has-delete-icon.is-dark:hover {
  background-color: #1c1c1c;
  text-decoration: none;
}
.tag .delete.is-primary, .tag.is-delete.is-primary, .tag.has-delete-icon.is-primary {
  background: #7957d5;
}
.tag .delete.is-primary:hover, .tag.is-delete.is-primary:hover, .tag.has-delete-icon.is-primary:hover {
  background-color: #5a32c7;
  text-decoration: none;
}
.tag .delete.is-link, .tag.is-delete.is-link, .tag.has-delete-icon.is-link {
  background: #7957d5;
}
.tag .delete.is-link:hover, .tag.is-delete.is-link:hover, .tag.has-delete-icon.is-link:hover {
  background-color: #5a32c7;
  text-decoration: none;
}
.tag .delete.is-info, .tag.is-delete.is-info, .tag.has-delete-icon.is-info {
  background: #167df0;
}
.tag .delete.is-info:hover, .tag.is-delete.is-info:hover, .tag.has-delete-icon.is-info:hover {
  background-color: #0d64c6;
  text-decoration: none;
}
.tag .delete.is-success, .tag.is-delete.is-success, .tag.has-delete-icon.is-success {
  background: #48c774;
}
.tag .delete.is-success:hover, .tag.is-delete.is-success:hover, .tag.has-delete-icon.is-success:hover {
  background-color: #34a85c;
  text-decoration: none;
}
.tag .delete.is-warning, .tag.is-delete.is-warning, .tag.has-delete-icon.is-warning {
  background: #ffdd57;
}
.tag .delete.is-warning:hover, .tag.is-delete.is-warning:hover, .tag.has-delete-icon.is-warning:hover {
  background-color: #ffd324;
  text-decoration: none;
}
.tag .delete.is-danger, .tag.is-delete.is-danger, .tag.has-delete-icon.is-danger {
  background: #f14668;
}
.tag .delete.is-danger:hover, .tag.is-delete.is-danger:hover, .tag.has-delete-icon.is-danger:hover {
  background-color: #ee1742;
  text-decoration: none;
}
.tag.has-delete-icon {
  padding: 0px;
}
.tag.has-delete-icon .icon:first-child:not(:last-child) {
  margin-right: 0px;
  margin-left: 0px;
}

.taginput .taginput-container {
  display: flex;
}
.taginput .taginput-container.is-focusable {
  padding-bottom: 0;
  padding-top: calc(0.275em - 1px);
  padding-left: 0;
  padding-right: 0;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: auto;
  cursor: text;
}
.taginput .taginput-container:not(.is-focusable) {
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: auto;
}
.taginput .taginput-container:not(.is-focusable).is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}
.taginput .taginput-container:not(.is-focusable).is-medium {
  font-size: 1.25rem;
}
.taginput .taginput-container:not(.is-focusable).is-large {
  font-size: 1.5rem;
}
.taginput .taginput-container > .tag,
.taginput .taginput-container > .tags {
  margin-left: 0.275rem;
  margin-bottom: calc(0.275em - 1px);
  font-size: 0.9em;
  height: calc(2em - 1px);
}
.taginput .taginput-container > .tag .tag,
.taginput .taginput-container > .tags .tag {
  margin-bottom: 0;
  font-size: 0.9em;
  height: calc(2em - 1px);
}
.taginput .taginput-container > .tag .tag.is-delete,
.taginput .taginput-container > .tags .tag.is-delete {
  width: calc(2em - 1px);
}
.taginput .taginput-container .autocomplete {
  position: static;
  flex: 1;
}
.taginput .taginput-container .autocomplete input {
  height: calc(2em - 1px);
  margin-bottom: calc(0.275em - 1px);
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  box-shadow: none;
  min-width: 8em;
}
.taginput .taginput-container .autocomplete input:focus {
  box-shadow: none !important;
}
.taginput .taginput-container .autocomplete .icon {
  height: calc(2em - 1px);
}
.taginput .taginput-container .autocomplete > .control.is-loading::after {
  top: 0.375em;
}

.timepicker .dropdown-menu {
  min-width: 0;
}
.timepicker .dropdown,
.timepicker .dropdown-trigger {
  width: 100%;
}
.timepicker .dropdown .input[readonly],
.timepicker .dropdown-trigger .input[readonly] {
  cursor: pointer;
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
}
.timepicker .dropdown .input[readonly]:focus, .timepicker .dropdown .input[readonly].is-focused, .timepicker .dropdown .input[readonly]:active, .timepicker .dropdown .input[readonly].is-active,
.timepicker .dropdown-trigger .input[readonly]:focus,
.timepicker .dropdown-trigger .input[readonly].is-focused,
.timepicker .dropdown-trigger .input[readonly]:active,
.timepicker .dropdown-trigger .input[readonly].is-active {
  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);
}
.timepicker .dropdown.is-disabled {
  opacity: 1;
}
.timepicker .dropdown-item, .timepicker .dropdown .dropdown-menu .has-link a, .dropdown .dropdown-menu .has-link .timepicker a {
  font-size: inherit;
  padding: 0;
}
.timepicker .timepicker-footer {
  padding: 0 0.5rem 0 0.5rem;
}
.timepicker .dropdown-content .control {
  font-size: 1.25em;
  margin-right: 0 !important;
}
.timepicker .dropdown-content .control .select {
  margin: 0 0.125em;
}
.timepicker .dropdown-content .control .select select {
  font-weight: 600;
  padding-right: calc(0.75em - 1px);
  border: 0;
}
.timepicker .dropdown-content .control .select select option:disabled {
  color: rgba(122, 122, 122, 0.7);
}
.timepicker .dropdown-content .control .select:after {
  display: none;
}
.timepicker .dropdown-content .control.is-colon {
  font-size: 1.7em;
  line-height: 1.7em;
}
.timepicker .dropdown-content .control.is-colon:last-child {
  padding-right: calc(0.75em - 1px);
}
.timepicker.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}
.timepicker.is-medium {
  font-size: 1.25rem;
}
.timepicker.is-large {
  font-size: 1.5rem;
}

.b-tooltip {
  position: relative;
  display: inline-flex;
}
.b-tooltip.is-top .tooltip-content {
  top: auto;
  right: auto;
  bottom: calc(100% + 5px + 2px);
  left: 50%;
  transform: translateX(-50%);
}
.b-tooltip.is-top .tooltip-content::before {
  top: 100%;
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translateX(-50%);
  border-top: 5px solid #7957d5;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
}
.b-tooltip.is-top.is-white .tooltip-content::before {
  border-top-color: white;
}
.b-tooltip.is-top.is-black .tooltip-content::before {
  border-top-color: #0a0a0a;
}
.b-tooltip.is-top.is-light .tooltip-content::before {
  border-top-color: whitesmoke;
}
.b-tooltip.is-top.is-dark .tooltip-content::before {
  border-top-color: #363636;
}
.b-tooltip.is-top.is-primary .tooltip-content::before {
  border-top-color: #7957d5;
}
.b-tooltip.is-top.is-primary.is-light .tooltip-content::before {
  border-top-color: #f2effb;
}
.b-tooltip.is-top.is-link .tooltip-content::before {
  border-top-color: #7957d5;
}
.b-tooltip.is-top.is-link.is-light .tooltip-content::before {
  border-top-color: #f2effb;
}
.b-tooltip.is-top.is-info .tooltip-content::before {
  border-top-color: #167df0;
}
.b-tooltip.is-top.is-info.is-light .tooltip-content::before {
  border-top-color: #ecf4fe;
}
.b-tooltip.is-top.is-success .tooltip-content::before {
  border-top-color: #48c774;
}
.b-tooltip.is-top.is-success.is-light .tooltip-content::before {
  border-top-color: #effaf3;
}
.b-tooltip.is-top.is-warning .tooltip-content::before {
  border-top-color: #ffdd57;
}
.b-tooltip.is-top.is-warning.is-light .tooltip-content::before {
  border-top-color: #fffbeb;
}
.b-tooltip.is-top.is-danger .tooltip-content::before {
  border-top-color: #f14668;
}
.b-tooltip.is-top.is-danger.is-light .tooltip-content::before {
  border-top-color: #feecf0;
}
.b-tooltip.is-right .tooltip-content {
  top: 50%;
  right: auto;
  bottom: auto;
  left: calc(100% + 5px + 2px);
  transform: translateY(-50%);
}
.b-tooltip.is-right .tooltip-content::before {
  top: 50%;
  right: 100%;
  bottom: auto;
  left: auto;
  transform: translateY(-50%);
  border-top: 5px solid transparent;
  border-right: 5px solid #7957d5;
  border-bottom: 5px solid transparent;
}
.b-tooltip.is-right.is-white .tooltip-content::before {
  border-right-color: white;
}
.b-tooltip.is-right.is-black .tooltip-content::before {
  border-right-color: #0a0a0a;
}
.b-tooltip.is-right.is-light .tooltip-content::before {
  border-right-color: whitesmoke;
}
.b-tooltip.is-right.is-dark .tooltip-content::before {
  border-right-color: #363636;
}
.b-tooltip.is-right.is-primary .tooltip-content::before {
  border-right-color: #7957d5;
}
.b-tooltip.is-right.is-primary.is-light .tooltip-content::before {
  border-right-color: #f2effb;
}
.b-tooltip.is-right.is-link .tooltip-content::before {
  border-right-color: #7957d5;
}
.b-tooltip.is-right.is-link.is-light .tooltip-content::before {
  border-right-color: #f2effb;
}
.b-tooltip.is-right.is-info .tooltip-content::before {
  border-right-color: #167df0;
}
.b-tooltip.is-right.is-info.is-light .tooltip-content::before {
  border-right-color: #ecf4fe;
}
.b-tooltip.is-right.is-success .tooltip-content::before {
  border-right-color: #48c774;
}
.b-tooltip.is-right.is-success.is-light .tooltip-content::before {
  border-right-color: #effaf3;
}
.b-tooltip.is-right.is-warning .tooltip-content::before {
  border-right-color: #ffdd57;
}
.b-tooltip.is-right.is-warning.is-light .tooltip-content::before {
  border-right-color: #fffbeb;
}
.b-tooltip.is-right.is-danger .tooltip-content::before {
  border-right-color: #f14668;
}
.b-tooltip.is-right.is-danger.is-light .tooltip-content::before {
  border-right-color: #feecf0;
}
.b-tooltip.is-bottom .tooltip-content {
  top: calc(100% + 5px + 2px);
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translateX(-50%);
}
.b-tooltip.is-bottom .tooltip-content::before {
  top: auto;
  right: auto;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-right: 5px solid transparent;
  border-bottom: 5px solid #7957d5;
  border-left: 5px solid transparent;
}
.b-tooltip.is-bottom.is-white .tooltip-content::before {
  border-bottom-color: white;
}
.b-tooltip.is-bottom.is-black .tooltip-content::before {
  border-bottom-color: #0a0a0a;
}
.b-tooltip.is-bottom.is-light .tooltip-content::before {
  border-bottom-color: whitesmoke;
}
.b-tooltip.is-bottom.is-dark .tooltip-content::before {
  border-bottom-color: #363636;
}
.b-tooltip.is-bottom.is-primary .tooltip-content::before {
  border-bottom-color: #7957d5;
}
.b-tooltip.is-bottom.is-primary.is-light .tooltip-content::before {
  border-bottom-color: #f2effb;
}
.b-tooltip.is-bottom.is-link .tooltip-content::before {
  border-bottom-color: #7957d5;
}
.b-tooltip.is-bottom.is-link.is-light .tooltip-content::before {
  border-bottom-color: #f2effb;
}
.b-tooltip.is-bottom.is-info .tooltip-content::before {
  border-bottom-color: #167df0;
}
.b-tooltip.is-bottom.is-info.is-light .tooltip-content::before {
  border-bottom-color: #ecf4fe;
}
.b-tooltip.is-bottom.is-success .tooltip-content::before {
  border-bottom-color: #48c774;
}
.b-tooltip.is-bottom.is-success.is-light .tooltip-content::before {
  border-bottom-color: #effaf3;
}
.b-tooltip.is-bottom.is-warning .tooltip-content::before {
  border-bottom-color: #ffdd57;
}
.b-tooltip.is-bottom.is-warning.is-light .tooltip-content::before {
  border-bottom-color: #fffbeb;
}
.b-tooltip.is-bottom.is-danger .tooltip-content::before {
  border-bottom-color: #f14668;
}
.b-tooltip.is-bottom.is-danger.is-light .tooltip-content::before {
  border-bottom-color: #feecf0;
}
.b-tooltip.is-left .tooltip-content {
  top: 50%;
  right: calc(100% + 5px + 2px);
  bottom: auto;
  left: auto;
  transform: translateY(-50%);
}
.b-tooltip.is-left .tooltip-content::before {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 100%;
  transform: translateY(-50%);
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #7957d5;
}
.b-tooltip.is-left.is-white .tooltip-content::before {
  border-left-color: white;
}
.b-tooltip.is-left.is-black .tooltip-content::before {
  border-left-color: #0a0a0a;
}
.b-tooltip.is-left.is-light .tooltip-content::before {
  border-left-color: whitesmoke;
}
.b-tooltip.is-left.is-dark .tooltip-content::before {
  border-left-color: #363636;
}
.b-tooltip.is-left.is-primary .tooltip-content::before {
  border-left-color: #7957d5;
}
.b-tooltip.is-left.is-primary.is-light .tooltip-content::before {
  border-left-color: #f2effb;
}
.b-tooltip.is-left.is-link .tooltip-content::before {
  border-left-color: #7957d5;
}
.b-tooltip.is-left.is-link.is-light .tooltip-content::before {
  border-left-color: #f2effb;
}
.b-tooltip.is-left.is-info .tooltip-content::before {
  border-left-color: #167df0;
}
.b-tooltip.is-left.is-info.is-light .tooltip-content::before {
  border-left-color: #ecf4fe;
}
.b-tooltip.is-left.is-success .tooltip-content::before {
  border-left-color: #48c774;
}
.b-tooltip.is-left.is-success.is-light .tooltip-content::before {
  border-left-color: #effaf3;
}
.b-tooltip.is-left.is-warning .tooltip-content::before {
  border-left-color: #ffdd57;
}
.b-tooltip.is-left.is-warning.is-light .tooltip-content::before {
  border-left-color: #fffbeb;
}
.b-tooltip.is-left.is-danger .tooltip-content::before {
  border-left-color: #f14668;
}
.b-tooltip.is-left.is-danger.is-light .tooltip-content::before {
  border-left-color: #feecf0;
}
.b-tooltip .tooltip-content {
  width: auto;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 400;
  box-shadow: 0px 1px 2px 1px rgba(0, 1, 0, 0.2);
  z-index: 38;
  white-space: nowrap;
  position: absolute;
}
.b-tooltip .tooltip-content::before {
  position: absolute;
  content: "";
  pointer-events: none;
  z-index: 38;
}
.b-tooltip .tooltip-trigger {
  width: 100%;
}
.b-tooltip.is-white .tooltip-content {
  background: white;
  color: #0a0a0a;
}
.b-tooltip.is-black .tooltip-content {
  background: #0a0a0a;
  color: white;
}
.b-tooltip.is-light .tooltip-content {
  background: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.b-tooltip.is-dark .tooltip-content {
  background: #363636;
  color: #fff;
}
.b-tooltip.is-primary .tooltip-content {
  background: #7957d5;
  color: #fff;
}
.b-tooltip.is-primary.is-light .tooltip-content {
  background: #f2effb;
  color: #552fbc;
}
.b-tooltip.is-link .tooltip-content {
  background: #7957d5;
  color: #fff;
}
.b-tooltip.is-link.is-light .tooltip-content {
  background: #f2effb;
  color: #552fbc;
}
.b-tooltip.is-info .tooltip-content {
  background: #167df0;
  color: #fff;
}
.b-tooltip.is-info.is-light .tooltip-content {
  background: #ecf4fe;
  color: #0d68ce;
}
.b-tooltip.is-success .tooltip-content {
  background: #48c774;
  color: #fff;
}
.b-tooltip.is-success.is-light .tooltip-content {
  background: #effaf3;
  color: #257942;
}
.b-tooltip.is-warning .tooltip-content {
  background: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}
.b-tooltip.is-warning.is-light .tooltip-content {
  background: #fffbeb;
  color: #947600;
}
.b-tooltip.is-danger .tooltip-content {
  background: #f14668;
  color: #fff;
}
.b-tooltip.is-danger.is-light .tooltip-content {
  background: #feecf0;
  color: #cc0f35;
}
.b-tooltip.is-always .tooltip-content::before,
.b-tooltip.is-always .tooltip-content {
  opacity: 1;
  visibility: visible;
}
.b-tooltip.is-multiline .tooltip-content {
  display: flex-block;
  text-align: center;
  white-space: normal;
}
.b-tooltip.is-multiline.is-small .tooltip-content {
  width: 180px;
}
.b-tooltip.is-multiline.is-medium .tooltip-content {
  width: 240px;
}
.b-tooltip.is-multiline.is-large .tooltip-content {
  width: 300px;
}
.b-tooltip.is-dashed .tooltip-trigger {
  border-bottom: 1px dashed #b5b5b5;
  cursor: default;
}
.b-tooltip.is-square .tooltip-content {
  border-radius: 0;
}

.upload {
  position: relative;
  display: inline-flex;
}
.upload input[type=file] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  outline: none;
  cursor: pointer;
  z-index: -1;
}
.upload .upload-draggable {
  cursor: pointer;
  padding: 0.25em;
  border: 1px dashed #b5b5b5;
  border-radius: 6px;
}
.upload .upload-draggable.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.upload .upload-draggable.is-loading {
  position: relative;
  pointer-events: none;
  opacity: 0.5;
}
.upload .upload-draggable.is-loading:after {
  animation: spinAround 500ms infinite linear;
  border: 2px solid #dbdbdb;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
  top: 0;
  left: calc(50% - 1.5em);
  width: 3em;
  height: 3em;
  border-width: 0.25em;
}
.upload .upload-draggable:hover.is-white, .upload .upload-draggable.is-hovered.is-white {
  border-color: white;
  background: rgba(255, 255, 255, 0.05);
}
.upload .upload-draggable:hover.is-black, .upload .upload-draggable.is-hovered.is-black {
  border-color: #0a0a0a;
  background: rgba(10, 10, 10, 0.05);
}
.upload .upload-draggable:hover.is-light, .upload .upload-draggable.is-hovered.is-light {
  border-color: whitesmoke;
  background: rgba(245, 245, 245, 0.05);
}
.upload .upload-draggable:hover.is-dark, .upload .upload-draggable.is-hovered.is-dark {
  border-color: #363636;
  background: rgba(54, 54, 54, 0.05);
}
.upload .upload-draggable:hover.is-primary, .upload .upload-draggable.is-hovered.is-primary {
  border-color: #7957d5;
  background: rgba(121, 87, 213, 0.05);
}
.upload .upload-draggable:hover.is-link, .upload .upload-draggable.is-hovered.is-link {
  border-color: #7957d5;
  background: rgba(121, 87, 213, 0.05);
}
.upload .upload-draggable:hover.is-info, .upload .upload-draggable.is-hovered.is-info {
  border-color: #167df0;
  background: rgba(22, 125, 240, 0.05);
}
.upload .upload-draggable:hover.is-success, .upload .upload-draggable.is-hovered.is-success {
  border-color: #48c774;
  background: rgba(72, 199, 116, 0.05);
}
.upload .upload-draggable:hover.is-warning, .upload .upload-draggable.is-hovered.is-warning {
  border-color: #ffdd57;
  background: rgba(255, 221, 87, 0.05);
}
.upload .upload-draggable:hover.is-danger, .upload .upload-draggable.is-hovered.is-danger {
  border-color: #f14668;
  background: rgba(241, 70, 104, 0.05);
}
.upload .upload-draggable.is-expanded {
  width: 100%;
}
.upload.is-expanded {
  width: 100%;
}
.upload.is-rounded {
  border-radius: 290486px;
}
.upload.is-rounded .file-name {
  border-top-right-radius: 290486px;
  border-bottom-right-radius: 290486px;
}

@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
  .upload input[type=file] {
    z-index: auto;
  }
  .upload .upload-draggable + input[type=file] {
    z-index: -1;
  }
}
`,p=function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("section",[e("b-tabs",{staticClass:"block",attrs:{position:"is-centered"}},[e("b-tab-item",{attrs:{label:"Donate"}},[e("form",{staticClass:"box"},[e("b-field",{attrs:{grouped:"",label:"You give"}},[e("b-numberinput",{attrs:{step:"0.01",controls:!1},model:{value:n.swap.amount,callback:function(i){n.$set(n.swap,"amount",i)},expression:"swap.amount"}}),n._v(" "),e("b-autocomplete",{attrs:{placeholder:"Pick a currency","keep-first":!1,"open-on-focus":!0,field:"name",data:n.filteredTokenNames,clearable:!1},model:{value:n.swap.token,callback:function(i){n.$set(n.swap,"token",i)},expression:"swap.token"}})],1),n._v(" "),e("b-field",{attrs:{label:"Receiver",type:"is-danger",message:"This address seems unreachable"}},[e("b-input",{attrs:{type:"text",autocomplete:"off",name:"wallet",placeholder:"ENS or Wallet"}})],1),n._v(" "),e("b-button",{attrs:{size:"large",type:"is-primary is-light"}},[n._v("Search variants")])],1)]),n._v(" "),e("b-tab-item",{attrs:{label:"Proposals"}},[e("div",{staticClass:"block"},[e("b-field",{attrs:{label:"Category"}},[e("b-radio",{attrs:{name:"category","native-value":"proposal"}},[n._v("Proposal")]),n._v(" "),e("b-radio",{attrs:{name:"category","native-value":"suggestion"}},[n._v("Suggestion")]),n._v(" "),e("b-radio",{attrs:{name:"category","native-value":"idea"}},[n._v("Idea")])],1)],1),n._v(" "),e("b-field",{attrs:{label:"Message"}},[e("b-input",{attrs:{maxlength:"200",type:"textarea"},model:{value:n.pool.message,callback:function(i){n.$set(n.pool,"message",i)},expression:"pool.message"}})],1),n._v(" "),e("b-button",{attrs:{type:"is-success",outlined:"",expanded:""},on:{click:function(i){n.pool.modal=!0}}},[n._v(`Send idea
      `)])],1),n._v(" "),e("b-tab-item",{attrs:{label:"Missions"}},n._l(n.vote.cases,function(i,t){return e("b-collapse",{key:t,staticClass:"card",attrs:{animation:"slide",open:n.vote.active==t},on:{open:function(a){n.vote.active=t}},scopedSlots:n._u([{key:"trigger",fn:function(a){return[e("div",{staticClass:"card-header",attrs:{role:"button"}},[e("p",{staticClass:"card-header-title"},[e("span",[n._v(n._s(i.mission_name))]),n._v(" "),e("b-taglist",{attrs:{attached:""}},[e("b-tag",{attrs:{type:"is-dark"}},[n._v("rocket")]),n._v(" "),e("b-tag",{attrs:{type:"is-info"}},[n._v(n._s(i.rocket.rocket_name))])],1)],1),n._v(" "),e("a",{staticClass:"card-header-icon"},[e("b-icon",{attrs:{icon:a.open?"menu-up":"menu-down"}})],1)])]}}],null,!0)},[n._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[n._v(`
            `+n._s(i.details)+`
          `)])])])}),1)],1),n._v(" "),e("b-modal",{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":!0},scopedSlots:n._u([{key:"default",fn:function(i){return[e("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[n._v("Idea box")]),n._v(" "),e("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(t){return n.$emit("close")}}})]),n._v(" "),e("section",{staticClass:"modal-card-body"},[e("b-field",{attrs:{label:"Message"}},[e("b-input",{attrs:{maxlength:"200",type:"textarea"},model:{value:n.pool.message,callback:function(t){n.$set(n.pool,"message",t)},expression:"pool.message"}})],1)],1),n._v(" "),e("footer",{staticClass:"modal-card-foot"},[e("b-button",{attrs:{label:"Close"},on:{click:function(t){return n.$emit("close")}}}),n._v(" "),e("b-button",{attrs:{label:"Apply",type:"is-primary"}})],1)])]}}]),model:{value:n.pool.modal,callback:function(i){n.$set(n.pool,"modal",i)},expression:"pool.modal"}})],1)},m=[],z=`
[data-v-65cdbecd]:focus {
  outline: none;
}
.card-header-title[data-v-65cdbecd] {
  display: flex;
  justify-content: space-between;
}
.collapse.card[data-v-65cdbecd] {
  margin-bottom: 1em;
}
`;const h={name:"buefyApp",data(){return{swap:{token:"",amount:.15},pool:{message:"SpaceX is developing a low latency, broadband internet system to meet the needs of consumers across the globe. Enabled by a constellation of low Earth orbit satellites, Starlink will provide fast, reliable internet to populations with little or no connectivity, including those in rural communities and places where existing services are too expensive or unreliable.",modal:!1},vote:{cases:d,active:0}}},computed:{filteredTokenNames(){return b.filter(n=>n.name.toString().toLowerCase().indexOf(this.swap.token.toLowerCase())>=0)}}},s={};var f=c(h,p,m,!1,u,"65cdbecd",null,null);function u(n){for(let o in s)this[o]=s[o]}var g=f.exports;r.use(l),new r({render:n=>n(g)}).$mount("#app");