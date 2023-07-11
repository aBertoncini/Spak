<script setup>
import { ref } from "vue";
import { GlobalEvents } from "vue-global-events";

const cursorRef = ref(null);
const cursor2Ref = ref(null);

// inseguimento del cursore
function onMouseMove(e) {
  cursorRef.value.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  cursor2Ref.value.style.left = e.clientX + "px";
  cursor2Ref.value.style.top = e.clientY + "px";
}
</script>

<template>
  <GlobalEvents @mousemove="onMouseMove"></GlobalEvents>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-dark-grayscale">
        <feColorMatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR type="table" tableValues="0 0.49803921568627" />
          <feFuncG type="table" tableValues="0 0.49803921568627" />
          <feFuncB type="table" tableValues="0 0.49803921568627" />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-grayscale">
        <feColorMatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR type="table" tableValues="0 1" />
          <feFuncG type="table" tableValues="0 1" />
          <feFuncB type="table" tableValues="0 1" />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-purple-yellow">
        <feColorMatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR
            type="table"
            tableValues="0.54901960784314 0.98823529411765"
          />
          <feFuncG type="table" tableValues="0 1" />
          <feFuncB
            type="table"
            tableValues="0.71764705882353 0.25490196078431"
          />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-blue-red">
        <feColorMatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR type="table" tableValues="0 1" />
          <feFuncG type="table" tableValues="0 0.27843137254902" />
          <feFuncB
            type="table"
            tableValues="0.5921568627451 0.27843137254902"
          />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-midnight">
        <feColorMatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR type="table" tableValues="0 0" />
          <feFuncG type="table" tableValues="0 0.64705882352941" />
          <feFuncB type="table" tableValues="0 1" />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-magenta-yellow">
        <feColorMatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR type="table" tableValues="0.78039215686275 1" />
          <feFuncG type="table" tableValues="0 0.94901960784314" />
          <feFuncB
            type="table"
            tableValues="0.35294117647059 0.47058823529412"
          />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-purple-green">
        <feColorMatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR
            type="table"
            tableValues="0.65098039215686 0.40392156862745"
          />
          <feFuncG type="table" tableValues="0 1" />
          <feFuncB type="table" tableValues="0.44705882352941 0.4" />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width="0"
    height="0"
    focusable="false"
    role="none"
    style="
      visibility: hidden;
      position: absolute;
      left: -9999px;
      overflow: hidden;
    "
  >
    <defs>
      <filter id="wp-duotone-blue-orange">
        <feColorMatrix
          color-interpolation-filters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR type="table" tableValues="0.098039215686275 1" />
          <feFuncG type="table" tableValues="0 0.66274509803922" />
          <feFuncB
            type="table"
            tableValues="0.84705882352941 0.41960784313725"
          />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <div ref="cursorRef" class="cursor" id="cursor"></div>
  <div ref="cursor2Ref" class="cursor2" id="cursor2"></div>
</template>

<style scoped lang="scss">
$cursor-color: var(--spak-comp-cursor-color1);
$cursor2-color: var(--spak-comp-cursor-color2);

@media only screen and (min-width: 1025px) {
  .cursor {
    width: 2em;
    height: 2em;
    position: fixed;
    left: 0;
    top: 0;
    border-radius: 100%;
    border: 1px solid $cursor-color;
    //mix-blend-mode: difference;
    transition: all 200ms ease-out;
    pointer-events: none;
    transform: translate3d(calc(-50% + 15px), -50%, 0);
    z-index: 99998;
  }

  .cursor2 {
    width: 0.9em;
    height: 0.9em;
    border-radius: 100%;
    background-color: $cursor2-color;
    //mix-blend-mode: difference;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: width 0.3s, height 0.3s;
    z-index: 99999;
  }

  .cursor2-hover {
    width: 50px;
    height: 50px;
    z-index: 99999;
  }
  .cursor-is-2-big {
    transition: all 0.3s;
    opacity: 0;
  }
}

@media only screen and (max-width: 1024px) {
  .cursor,
  .cursor2 {
    display: none;
  }
}
</style>
