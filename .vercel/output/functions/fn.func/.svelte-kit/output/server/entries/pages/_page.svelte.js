import { b as split_css_unit, c as create_ssr_component, a as subscribe, s as setContext, e as escape, d as createEventDispatcher, g as getContext, f as add_attribute, h as compute_slots, i as spread, j as escape_object, v as validate_component, m as missing_component, k as set_store_value, n as null_to_empty } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
import hsl from "hsl-to-hex";
import "pixi.js";
import "@pixi/filter-kawase-blur";
import { createNoise2D } from "simplex-noise";
import "debounce";
import { p as prefersReducedMotionStore, g as getModalStore } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [xValue, xUnit] = split_css_unit(x);
  const [yValue, yUnit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
			opacity: ${target_opacity - od * u}`
  };
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut, axis = "y" } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property]);
  const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => `${e[0].toUpperCase()}${e.slice(1)}`
  );
  const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
  const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
  const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
  const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
  const border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width`]
  );
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
  };
}
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  let { autocollapse = false } = $$props;
  let { width = "w-full" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { disabled = false } = $$props;
  let { padding = "py-2 px-4" } = $$props;
  let { hover = "hover:bg-primary-hover-token" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { caretOpen = "rotate-180" } = $$props;
  let { caretClosed = "" } = $$props;
  let { regionControl = "" } = $$props;
  let { regionPanel = "space-y-4" } = $$props;
  let { regionCaret = "" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = slide } = $$props;
  let { transitionInParams = { duration: 200 } } = $$props;
  let { transitionOut = slide } = $$props;
  let { transitionOutParams = { duration: 200 } } = $$props;
  const active = writable(null);
  setContext("active", active);
  setContext("autocollapse", autocollapse);
  setContext("disabled", disabled);
  setContext("padding", padding);
  setContext("hover", hover);
  setContext("rounded", rounded);
  setContext("caretOpen", caretOpen);
  setContext("caretClosed", caretClosed);
  setContext("regionControl", regionControl);
  setContext("regionPanel", regionPanel);
  setContext("regionCaret", regionCaret);
  setContext("transitions", transitions);
  setContext("transitionIn", transitionIn);
  setContext("transitionInParams", transitionInParams);
  setContext("transitionOut", transitionOut);
  setContext("transitionOutParams", transitionOutParams);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
  $$unsubscribe_prefersReducedMotionStore();
  return ` <div class="${"accordion " + escape(classesBase, true)}" data-testid="accordion">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "";
const cControl = "text-left w-full flex items-center space-x-4";
const cControlCaret = "fill-current w-3 transition-transform duration-[200ms]";
const cPanel = "";
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let openState;
  let classesBase;
  let classesControl;
  let classesCaretState;
  let classesControlCaret;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let $active, $$unsubscribe_active;
  const dispatch = createEventDispatcher();
  let { open = false } = $$props;
  let { id = String(Math.random()) } = $$props;
  let { autocollapse = getContext("autocollapse") } = $$props;
  let { active = getContext("active") } = $$props;
  $$unsubscribe_active = subscribe(active, (value) => $active = value);
  let { disabled = getContext("disabled") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { caretOpen = getContext("caretOpen") } = $$props;
  let { caretClosed = getContext("caretClosed") } = $$props;
  let { regionControl = getContext("regionControl") } = $$props;
  let { regionPanel = getContext("regionPanel") } = $$props;
  let { regionCaret = getContext("regionCaret") } = $$props;
  let { transitions = getContext("transitions") } = $$props;
  let { transitionIn = getContext("transitionIn") } = $$props;
  let { transitionInParams = getContext("transitionInParams") } = $$props;
  let { transitionOut = getContext("transitionOut") } = $$props;
  let { transitionOutParams = getContext("transitionOutParams") } = $$props;
  function setActive(event) {
    if (autocollapse === true) {
      active.set(id);
    } else {
      open = !open;
    }
    onToggle(event);
  }
  function onToggle(event) {
    const currentOpenState = autocollapse ? $active === id : open;
    dispatch("toggle", {
      event,
      id: `accordion-control-${id}`,
      open: currentOpenState,
      autocollapse
    });
  }
  if (autocollapse && open)
    setActive();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  {
    if (open && autocollapse)
      setActive();
  }
  openState = autocollapse ? $active === id : open;
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesControl = `${cControl} ${padding} ${hover} ${rounded} ${regionControl}`;
  classesCaretState = openState ? caretOpen : caretClosed;
  classesControlCaret = `${cControlCaret} ${regionCaret} ${classesCaretState}`;
  classesPanel = `${cPanel} ${padding} ${rounded} ${regionPanel}`;
  $$unsubscribe_active();
  return ` <div class="${"accordion-item " + escape(classesBase, true)}" data-testid="accordion-item"> <button type="button" class="${"accordion-control " + escape(classesControl, true)}" id="${"accordion-control-" + escape(id, true)}"${add_attribute("aria-expanded", openState, 0)} aria-controls="${"accordion-panel-" + escape(id, true)}" ${disabled ? "disabled" : ""}> ${$$slots.lead ? `<div class="accordion-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="accordion-summary flex-1">${slots.summary ? slots.summary({}) : `(summary)`}</div>  <div class="${"accordion-summary-caret " + escape(classesControlCaret, true)}"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg></div></button>  ${openState ? `<div class="${"accordion-panel " + escape(classesPanel, true)}" id="${"accordion-panel-" + escape(id, true)}" role="region"${add_attribute("aria-hidden", !openState, 0)} aria-labelledby="${"accordion-control-" + escape(id, true)}">${slots.content ? slots.content({}) : `(content)`}</div>` : ``}</div>`;
});
const cBackdrop = "fixed top-0 left-0 right-0 bottom-0 overflow-y-auto";
const cTransitionLayer = "w-full h-fit min-h-full p-4 overflow-y-auto flex justify-center";
const cModal = "block overflow-y-auto";
const cModalImage = "w-full h-auto";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cPosition;
  let classesBackdrop;
  let classesTransitionLayer;
  let classesModal;
  let parent;
  let $modalStore, $$unsubscribe_modalStore;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  createEventDispatcher();
  let { position = "items-center" } = $$props;
  let { components = {} } = $$props;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { width = "w-modal" } = $$props;
  let { height = "h-auto" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { zIndex = "z-[999]" } = $$props;
  let { buttonNeutral = "variant-ghost-surface" } = $$props;
  let { buttonPositive = "variant-filled" } = $$props;
  let { buttonTextCancel = "Cancel" } = $$props;
  let { buttonTextConfirm = "Confirm" } = $$props;
  let { buttonTextSubmit = "Submit" } = $$props;
  let { regionBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { regionHeader = "text-2xl font-bold" } = $$props;
  let { regionBody = "max-h-[200px] overflow-hidden" } = $$props;
  let { regionFooter = "flex justify-end space-x-2" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fly } = $$props;
  let { transitionInParams = { duration: 150, opacity: 0, x: 0, y: 100 } } = $$props;
  let { transitionOut = fly } = $$props;
  let { transitionOutParams = { duration: 150, opacity: 0, x: 0, y: 100 } } = $$props;
  let promptValue;
  const buttonTextDefaults = {
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit
  };
  let currentComponent;
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  modalStore.subscribe((modals) => {
    if (!modals.length)
      return;
    if (modals[0].type === "prompt")
      promptValue = modals[0].value;
    buttonTextCancel = modals[0].buttonTextCancel || buttonTextDefaults.buttonTextCancel;
    buttonTextConfirm = modals[0].buttonTextConfirm || buttonTextDefaults.buttonTextConfirm;
    buttonTextSubmit = modals[0].buttonTextSubmit || buttonTextDefaults.buttonTextSubmit;
    currentComponent = typeof modals[0].component === "string" ? components[modals[0].component] : modals[0].component;
  });
  function onClose() {
    if ($modalStore[0].response)
      $modalStore[0].response(false);
    modalStore.close();
  }
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.buttonNeutral === void 0 && $$bindings.buttonNeutral && buttonNeutral !== void 0)
    $$bindings.buttonNeutral(buttonNeutral);
  if ($$props.buttonPositive === void 0 && $$bindings.buttonPositive && buttonPositive !== void 0)
    $$bindings.buttonPositive(buttonPositive);
  if ($$props.buttonTextCancel === void 0 && $$bindings.buttonTextCancel && buttonTextCancel !== void 0)
    $$bindings.buttonTextCancel(buttonTextCancel);
  if ($$props.buttonTextConfirm === void 0 && $$bindings.buttonTextConfirm && buttonTextConfirm !== void 0)
    $$bindings.buttonTextConfirm(buttonTextConfirm);
  if ($$props.buttonTextSubmit === void 0 && $$bindings.buttonTextSubmit && buttonTextSubmit !== void 0)
    $$bindings.buttonTextSubmit(buttonTextSubmit);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
    $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionBody === void 0 && $$bindings.regionBody && regionBody !== void 0)
    $$bindings.regionBody(regionBody);
  if ($$props.regionFooter === void 0 && $$bindings.regionFooter && regionFooter !== void 0)
    $$bindings.regionFooter(regionFooter);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  cPosition = $modalStore[0]?.position ?? position;
  classesBackdrop = `${cBackdrop} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""} ${$modalStore[0]?.backdropClasses ?? ""}`;
  classesTransitionLayer = `${cTransitionLayer} ${cPosition ?? ""}`;
  classesModal = `${cModal} ${background} ${width} ${height} ${padding} ${spacing} ${rounded} ${shadow} ${$modalStore[0]?.modalClasses ?? ""}`;
  parent = {
    position,
    // ---
    background,
    width,
    height,
    padding,
    spacing,
    rounded,
    shadow,
    // ---
    buttonNeutral,
    buttonPositive,
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit,
    // ---
    regionBackdrop,
    regionHeader,
    regionBody,
    regionFooter,
    // ---
    onClose
  };
  $$unsubscribe_modalStore();
  $$unsubscribe_prefersReducedMotionStore();
  return ` ${$modalStore.length > 0 ? `   <div class="${"modal-backdrop " + escape(classesBackdrop, true)}" data-testid="modal-backdrop"> <div class="${"modal-transition " + escape(classesTransitionLayer, true)}">${$modalStore[0].type !== "component" ? ` <div class="${"modal " + escape(classesModal, true)}" data-testid="modal" role="dialog" aria-modal="true"${add_attribute("aria-label", $modalStore[0].title ?? "", 0)}> ${$modalStore[0]?.title ? `<header class="${"modal-header " + escape(regionHeader, true)}"><!-- HTML_TAG_START -->${$modalStore[0].title}<!-- HTML_TAG_END --></header>` : ``}  ${$modalStore[0]?.body ? `<article class="${"modal-body " + escape(regionBody, true)}"><!-- HTML_TAG_START -->${$modalStore[0].body}<!-- HTML_TAG_END --></article>` : ``}  ${$modalStore[0]?.image && typeof $modalStore[0]?.image === "string" ? `<img class="${"modal-image " + escape(cModalImage, true)}"${add_attribute("src", $modalStore[0]?.image, 0)} alt="Modal">` : ``}  ${$modalStore[0].type === "alert" ? ` <footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button></footer>` : `${$modalStore[0].type === "confirm" ? ` <footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button> <button type="button" class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextConfirm)}</button></footer>` : `${$modalStore[0].type === "prompt" ? ` <form class="space-y-4"><input${spread(
    [
      { class: "modal-prompt-input input" },
      { name: "prompt" },
      { type: "text" },
      escape_object($modalStore[0].valueAttr)
    ],
    {}
  )}${add_attribute("value", promptValue, 0)}> <footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button> <button type="submit" class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextSubmit)}</button></footer></form>` : ``}`}`}</div>` : `  <div class="${"modal contents " + escape($modalStore[0]?.modalClasses ?? "", true)}" data-testid="modal-component" role="dialog" aria-modal="true"${add_attribute("aria-label", $modalStore[0].title ?? "", 0)}>${validate_component(currentComponent?.ref || missing_component, "svelte:component").$$render($$result, Object.assign({}, currentComponent?.props, { parent }), {}, {
    default: () => {
      return `${currentComponent?.slot ? `<!-- HTML_TAG_START -->${currentComponent?.slot}<!-- HTML_TAG_END -->` : ``}`;
    }
  })}</div>`}</div></div>` : ``}`;
});
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { shadow = "drop-shadow-[-16px_16px_17px_rgb(182,208,242)]" } = $$props;
  let { upDown = "" } = $$props;
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.upDown === void 0 && $$bindings.upDown && upDown !== void 0)
    $$bindings.upDown(upDown);
  return `<div${add_attribute("class", `box1 w-10/12 md:w-3/12 min-w-[217px] mx-auto md:mx-0 relative ${upDown}`, 0)}><div${add_attribute("class", `w-full h-full relative pb-16 rounded-2xl bg-secondary-50 ${shadow} z-10`, 0)}><div class="w-7/12 relative mx-auto text-center text-lg flex flex-wrap z-30"><div class="relative mx-auto max-w-[50px] md:max-w-[100px]">${slots.icon ? slots.icon({}) : ``}</div> ${slots.info ? slots.info({}) : ``}</div> <div class="absolute w-3/12 md:w-6/12 h-2/6 z-[1] box-content p-4 -top-6 md:-top-8 rounded-2xl left-1/2 transform -translate-x-1/2 bg-secondary-50"></div></div> <div class="absolute w-3/12 md:w-6/12 h-2/6 z-0 box-content p-4 -top-6 md:-top-8 rounded-2xl left-1/2 transform -translate-x-1/2 bg-secondary-50 drop-shadow-[-16px_16px_17px_rgb(182,208,242)]"></div></div>`;
});
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "w-full" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  return ` <div${add_attribute("class", `${width} max-w-[450px] email bg-secondary-50 text-on-primary-token mx-auto rounded-2xl p-8`, 0)}>${`<form class="form block" data-svelte-h="svelte-dymqso"><label for="email" class="font-light">Email <span class="text-success-700 font-light">(required)</span></label> <input class="w-full p-2 my-4 rounded-none border-[1px] border-success-500" type="email" id="email" name="email" value=""> <button class="block mx-auto mb-4 btn btn-lg bg-gradient-to-br variant-gradient-primary-tertiary" type="submit">Join</button></form>`}</div>`;
});
function random(min, max) {
  return Math.random() * (max - min) + min;
}
class ColorPalette {
  constructor() {
    this.setColors();
  }
  setColors() {
    this.hue = ~~random(0, 360);
    this.complimentaryHue1 = this.hue + 30;
    this.complimentaryHue2 = this.hue + 60;
    this.saturation = 95;
    this.lightness = 50;
    this.baseColor = hsl(this.hue, this.saturation, this.lightness);
    this.complimentaryColor1 = hsl(
      this.complimentaryHue1,
      this.saturation,
      this.lightness
    );
    this.complimentaryColor2 = hsl(
      this.complimentaryHue2,
      this.saturation,
      this.lightness
    );
    this.colorChoices = [
      this.baseColor,
      this.complimentaryColor1,
      this.complimentaryColor2
    ];
  }
  randomColor() {
    return this.colorChoices[~~random(0, this.colorChoices.length)].replace(
      "#",
      "0x"
    );
  }
  // setCustomProperties() {
  //     document.documentElement.style.setProperty("--hue", $colorPalette.hue);
  //     document.documentElement.style.setProperty("--hue-complimentary1", $colorPalette.complimentaryHue1);
  //     document.documentElement.style.setProperty("--hue-complimentary2", $colorPalette.complimentaryHue2);
  //     }
}
const colorPalette = writable(new ColorPalette());
const hue = writable();
const hueComplimentary1 = writable();
const hueComplimentary2 = writable();
new createNoise2D();
const BlurBackground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colorPalette, $$unsubscribe_colorPalette;
  let $hueComplimentary2, $$unsubscribe_hueComplimentary2;
  let $hueComplimentary1, $$unsubscribe_hueComplimentary1;
  let $hue, $$unsubscribe_hue;
  $$unsubscribe_colorPalette = subscribe(colorPalette, (value) => $colorPalette = value);
  $$unsubscribe_hueComplimentary2 = subscribe(hueComplimentary2, (value) => $hueComplimentary2 = value);
  $$unsubscribe_hueComplimentary1 = subscribe(hueComplimentary1, (value) => $hueComplimentary1 = value);
  $$unsubscribe_hue = subscribe(hue, (value) => $hue = value);
  let { width = "w-full" } = $$props;
  let { height = "h-full" } = $$props;
  let orbCanvas;
  let orbs;
  function changeColor() {
    $colorPalette.setColors();
    set_store_value(hue, $hue = $colorPalette.hue, $hue);
    set_store_value(hueComplimentary1, $hueComplimentary1 = $colorPalette.complimentaryHue1, $hueComplimentary1);
    set_store_value(hueComplimentary2, $hueComplimentary2 = $colorPalette.complimentaryHue2, $hueComplimentary2);
    orbs.forEach((orb) => {
      orb.fill = $colorPalette.randomColor();
    });
  }
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.changeColor === void 0 && $$bindings.changeColor && changeColor !== void 0)
    $$bindings.changeColor(changeColor);
  $$unsubscribe_colorPalette();
  $$unsubscribe_hueComplimentary2();
  $$unsubscribe_hueComplimentary1();
  $$unsubscribe_hue();
  return `   <canvas${add_attribute("class", `absolute ${width} ${height} z-0`, 0)}${add_attribute("this", orbCanvas, 0)}></canvas>`;
});
Promise.resolve();
const AnimateItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".slide-up-blurred-bottom.svelte-1y2kbo{-webkit-animation:svelte-1y2kbo-slide-up-blurred-bottom 0.6s\n      cubic-bezier(0.23, 1, 0.32, 1) both;animation:svelte-1y2kbo-slide-up-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;opacity:1}.slide-down-blurred-bottom.svelte-1y2kbo{-webkit-animation:svelte-1y2kbo-slide-down-blurred-bottom 0.6s\n      cubic-bezier(0.23, 1, 0.32, 1) both;animation:svelte-1y2kbo-slide-down-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;opacity:1}@-webkit-keyframes svelte-1y2kbo-slide-up-blurred-bottom{0%{-webkit-transform:translateY(500px);transform:translateY(500px);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes svelte-1y2kbo-slide-up-blurred-bottom{0%{-webkit-transform:translateY(500px);transform:translateY(500px);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@-webkit-keyframes svelte-1y2kbo-slide-down-blurred-bottom{0%{-webkit-transform:translateY(-500px);transform:translateY(-500px);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes svelte-1y2kbo-slide-down-blurred-bottom{0%{-webkit-transform:translateY(-500px);transform:translateY(-500px);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}",
  map: null
};
const AnimateItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${[
    "opacity-0 svelte-1y2kbo",
    "  "
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </div>`;
});
const tag = "/_app/immutable/assets/tag.88240812.png";
const poster = "/_app/immutable/assets/video-placeholder.8a1ccd2c.png";
const video = "/_app/immutable/assets/rake-dark.57d288c6.mp4";
const circle = "/_app/immutable/assets/circle.8f3d4447.png";
const one = "/_app/immutable/assets/one.eddd805f.png";
const two = "data:image/png;base64,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";
const three = "/_app/immutable/assets/three.b159a3a9.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".building.svelte-lglohr{background:rgb(255, 255, 255);background:linear-gradient(\n      174deg,\n      rgba(var(--color-primary-300)) 0%,\n      rgba(var(--color-primary-200)) 30%,\n      /* rgba(255, 255, 255, 1) 35%, */ rgba(var(--color-tertiary-500)) 100%\n    )}.text-gradient.svelte-lglohr{background-image:linear-gradient(\n      45deg,\n      var(--base) 25%,\n      var(--complimentary2)\n    );-webkit-background-clip:text;-webkit-text-fill-color:transparent;-moz-background-clip:text;-moz-text-fill-color:transparent}.backgroundGradient.svelte-lglohr{background:var(--bg-gradient)}.marquee.svelte-lglohr{--gap:2rem;display:flex;overflow:hidden;user-select:none;gap:var(--gap)}.marquee__content.svelte-lglohr{flex-shrink:0;display:flex;justify-content:space-around;min-width:100%;gap:var(--gap);animation:svelte-lglohr-scroll 35s linear infinite}@keyframes svelte-lglohr-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--gap)))}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cssColors;
  let $hue, $$unsubscribe_hue;
  let $hueComplimentary2, $$unsubscribe_hueComplimentary2;
  let $hueComplimentary1, $$unsubscribe_hueComplimentary1;
  $$unsubscribe_hue = subscribe(hue, (value) => $hue = value);
  $$unsubscribe_hueComplimentary2 = subscribe(hueComplimentary2, (value) => $hueComplimentary2 = value);
  $$unsubscribe_hueComplimentary1 = subscribe(hueComplimentary1, (value) => $hueComplimentary1 = value);
  let { form = false } = $$props;
  let blurBackgroundComponent;
  let landing;
  let bigFont;
  let open = [[false, false, false], [false, false, false]];
  getModalStore();
  let writingBlock;
  let videoRef;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    cssColors = `--dark-color: hsl(${$hue}, 100%, 9%);
    --light-color: hsl(${$hue}, 95%, 98%);
    --base: hsl(${$hue}, 95%, 50%);
    --complimentary1: hsl(${$hueComplimentary1}, 95%, 50%);
    --complimentary2: hsl(${$hueComplimentary2}, 95%, 50%);

    --bg-gradient: linear-gradient(
      to bottom,
      hsla(${$hue}, 95%, 99%, .5),
      hsla(${$hue}, 95%, 95%, .5)
    );`;
    $$rendered = ` ${!form?.success ? `<main class="flex flex-col items-center justify-center h-[100vh]"><div${add_attribute("this", bigFont, 0)} data-svelte-h="svelte-1bbm61f"><h1 class="${escape(null_to_empty(`text-primary-500 text-[6em] leading-none text-center font-semibold`), true) + " svelte-lglohr"}">Rake</h1></div> <form method="POST" class="flex flex-col items-center gap-4 " data-svelte-h="svelte-1nhb5oe"><label for="password" class="font-bold">Password:</label> <input class="text-on-primary-token p-4" type="password" id="password" name="password" required> <button type="submit" class="px-4 py-2 bg-primary-500 rounded-md">Login</button></form></main>` : `<div class="wrapper max-w-[1500px] mx-auto"${add_attribute("style", cssColors, 0)}><div class="h-[100vh] w-full mx-auto flex justify-evenly flex-col align-center bg-surface-500 relative z-50"><div class="marquee text-xl svelte-lglohr" data-svelte-h="svelte-11ldqty"><ul class="marquee__content svelte-lglohr"><li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li></ul> <ul aria-hidden="true" class="marquee__content svelte-lglohr"><li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li> <li>Welcome To</li></ul></div>  <div${add_attribute("this", bigFont, 0)} data-svelte-h="svelte-4sr503"><h1 class="${escape(null_to_empty(`text-primary-500 text-[6em] leading-none text-center font-semibold`), true) + " svelte-lglohr"}">Rake</h1></div> <button type="button" class="btn w-8/12 sm:w-3/12 sm:px-32 mx-auto py-6 variant-ringed-success hover:hover:variant-filled-success" data-svelte-h="svelte-1ueb8el">Click to Deploy</button></div> <div class="landing w-full relative !z-10"${add_attribute("this", landing, 0)}><svg viewBox="0 0 1500 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="pb-20"><path d="M750.744 99.9872C360.238 101.319 0 0 0 0H1500C1500 0 1141.25 98.6556 750.744 99.9872Z" class="fill-surface-500"></path></svg> <img${add_attribute("src", tag, 0)} class="w-11/12 sm:w-9/12 m-auto"> <div class="join py-20 px-0 sm:p-20 flex justify-center align-center"><button type="button" class="btn w-10/12 sm:w-auto sm:px-32 py-6 variant-ghost-tertiary hover:hover:variant-ghost-primary" data-svelte-h="svelte-17rpyhn">Join the waitlist</button> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        position: "items-start",
        transitionInParams: { duration: 150, opacity: 0, x: 0, y: -100 },
        transitionOutParams: { duration: 150, opacity: 0, x: 0, y: -100 }
      },
      {},
      {}
    )}</div> <div class="below w-10/12 mx-auto"><video class="mx-auto"${add_attribute("poster", poster, 0)} controls muted disablepictureinpicture controlslist="nodownload noremoteplayback noplaybackrate nomode" loop${add_attribute("this", videoRef, 0)} data-svelte-h="svelte-1nljatt"><source${add_attribute("src", video, 0)}><track kind="captions"></video> ${validate_component(AnimateItem, "AnimateItem").$$render($$result, {}, {}, {
      default: () => {
        return `<h3 class="text-center font-semibold pt-12 pb-24 text-xl sm:text-4xl leading-relaxed" data-svelte-h="svelte-6nzfya">Rake allows users to <span class="text-primary-500 bg-secondary-500 font-bold"><strong>deploy</strong></span>
            resources straight to their cloud platform with a simple
            <span class="text-primary-500 bg-secondary-500"><strong>drag and drop</strong></span> interface.</h3>`;
      }
    })}</div></div> <div class="firstinfo bg-secondary-50 text-on-primary-token pt-[3.3vmax] pb-[3.3vmax]"> <div class="w-10/12 mx-auto flex items-center justify-between flex-col md:flex-row gap-8">${validate_component(AnimateItem, "AnimateItem").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="textgroup pl-6 w-full pt-7" data-svelte-h="svelte-1tbjz63"><h2 class="text-h2-scale font-[650] pb-[11px]">A groundbreaking new way to deploy your cloud infrastructure</h2> <p class="leading-[1.8] font-light">Transform your cloud deployment workflow. Once deployed,
              configurations and manifests are generated and sent to a managed
              kubernetes cluster. This cluster assumes responsibility for
              synchronizing statuses between your diagram and the cloud. Letting
              you spend less time bug squashing and more time for innovating.</p></div>`;
      }
    })} <img class="w-full md:w-6/12 object-contain px-12"${add_attribute("src", circle, 0)}></div></div> <svg width="1512" height="80" viewBox="0 0 1512 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-secondary-50 w-full"><line x1="-0.14665" y1="77.0036" x2="1511.85" y2="3.00358" stroke="black" stroke-width="6"></line></svg>  <div class="secondinfo bg-secondary-50 text-on-primary-token"><div class="flex flex-wrap justify-evenly px-12 pb-10 md:pb-28" data-svelte-h="svelte-1ad0bpa"><div class="left w-full sm:w-4/12 min-w-[210px] pt-10 md:pt-24"><h2 class="text-h2-scale font-semibold pb-[4vh] text-[#2a97fe]">Complex tasks made easy</h2> <p class="leading-[1.8] font-light">Rake is quick, user-friendly, and highly customizable. Everything is
            optimized so you can spend less time developing and more time
            growing your business.</p></div> <div class="right pt-14 w-full sm:w-4/12 min-w-[210px]"><h2 class="text-h2-scale font-semibold pb-[4vh]">Optimizing an aging system</h2> <p class="leading-[1.8] font-light">Manually coding entire systems, testing, and debugging is a thing of
            the past. Rake is the next evolution is in developing cloud
            technologies.</p></div></div>  ${validate_component(AnimateItem, "AnimateItem").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="flex flex-wrap justify-evenly flex-col gap-24 md:gap-0 md:flex-row">${validate_component(Box, "Box").$$render(
          $$result,
          {
            shadow: "drop-shadow-[-16px_16px_17px_rgb(182,208,242)]",
            upDown: "top-10"
          },
          {},
          {
            info: () => {
              return `<p slot="info" class="font-medium" data-svelte-h="svelte-puo2d8">Trade long complex configs for efficient interfaces</p>`;
            },
            icon: () => {
              return `<img slot="icon"${add_attribute("src", one, 0)}>`;
            }
          }
        )} ${validate_component(Box, "Box").$$render(
          $$result,
          {
            shadow: "drop-shadow-[-16px_16px_17px_rgb(188,201,218)]"
          },
          {},
          {
            info: () => {
              return `<p slot="info" class="font-medium" data-svelte-h="svelte-tutrks">Retain the functionality of code with the simplicity of visuals</p>`;
            },
            icon: () => {
              return `<img slot="icon"${add_attribute("src", two, 0)}>`;
            }
          }
        )} ${validate_component(Box, "Box").$$render(
          $$result,
          {
            shadow: "drop-shadow-[-16px_16px_17px_rgb(191,194,198)]",
            upDown: "-top-10"
          },
          {},
          {
            info: () => {
              return `<p slot="info" class="font-medium" data-svelte-h="svelte-ot8kx5">Optimize variable management for efficiency and accuracy</p>`;
            },
            icon: () => {
              return `<img slot="icon"${add_attribute("src", three, 0)}>`;
            }
          }
        )}</div>`;
      }
    })}</div> <div class="pt-10 pb-[3.3vmax] bg-secondary-50"></div> <div class="overflow-x-hidden" data-svelte-h="svelte-f51o2b"><div class="bg-secondary-50 w-full h-0 border-solid border-x-transparent border-l-[100vw] border-r-0 border-b-[6vw] border-b-surface-800"></div></div> <div class="py-20"><h2 class="text-h2-scale font-semibold pb-[11px] text-center pb-20" data-svelte-h="svelte-49jahr">Simplifying the system.</h2> <div class="w-10/12 mx-auto md:w-full flex justify-evenly flex-col md:flex-row pt-10 gap-10 md:gap-0"><div class="leftList w-full md:w-4/12 pb-10"><h3 class="text-h3-scale px-4 pb-4 border-b-[1px] border-white" data-svelte-h="svelte-1xfas3v">Development now</h3>   ${validate_component(Accordion, "Accordion").$$render($$result, { padding: "py-6 px-6" }, {}, {
      default: () => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          {
            class: "border-y-[1px] border-white",
            open: open[0][0]
          },
          {},
          {
            content: () => {
              return `<span class="text-md font-extralight" data-svelte-h="svelte-nhal4o">Typically it would take a team of people weeks, if not
                  months, of work to do something Rake can handle in a few
                  minutes.</span>`;
            },
            summary: () => {
              return `<span class="text-lg" data-svelte-h="svelte-lbki4a">Lengthy development times</span>`;
            }
          }
        )} ${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          {
            class: "border-b-[1px] border-white ",
            open: open[0][1]
          },
          {},
          {
            content: () => {
              return `<span class="text-md font-extralight" data-svelte-h="svelte-1vc3low">After initial diagramming of the project, there is constant
                  back and forth between development and testing. Creating a
                  clunky and outdated workflow.</span>`;
            },
            summary: () => {
              return `<span class="text-lg" data-svelte-h="svelte-1f4wsaw">Inefficient flow</span>`;
            }
          }
        )} ${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          {
            class: "border-b-[1px] border-white ",
            open: open[0][2]
          },
          {},
          {
            content: () => {
              return `<span class="text-md font-extralight" data-svelte-h="svelte-p81b6n">Deploying cloud resources can be cumbersome. Navigating
                  configurations, managing security, and understanding intricate
                  platforms require deep expertise, overshadowing the cloud&#39;s
                  inherent flexibility and scalability.</span>`;
            },
            summary: () => {
              return `<span class="text-lg" data-svelte-h="svelte-1tpum5m">Cumbersome to manage</span>`;
            }
          }
        )}`;
      }
    })}</div> <div class="rightList w-full md:w-4/12"><h3 class="text-h3-scale px-4 pb-4 border-b-[1px] border-white" data-svelte-h="svelte-1hjjb4e">Development using <span class="text-primary-500">Rake</span></h3> ${validate_component(Accordion, "Accordion").$$render($$result, { padding: "py-6 px-6" }, {}, {
      default: () => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          {
            class: "border-y-[1px] border-white ",
            open: open[1][0]
          },
          {},
          {
            content: () => {
              return `<span class="text-md font-extralight" data-svelte-h="svelte-1o2fnwm">No more waiting for teams of people to build and modify
                  systems, everything can now be done, from as little as one
                  user, in a fraction of the time.</span> `;
            },
            summary: () => {
              return `<span class="text-lg" data-svelte-h="svelte-184aqjy">Instant Deployment</span>`;
            }
          }
        )} ${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          {
            class: "border-b-[1px] border-white ",
            open: open[1][1]
          },
          {},
          {
            content: () => {
              return `<span class="text-md font-extralight" data-svelte-h="svelte-iqa8r8">No more bug chasing or error checking, your entire systems’
                  resources are managed live between your cloud platform. You
                  have complete control and visibility at all times.</span>`;
            },
            summary: () => {
              return `<span class="text-lg" data-svelte-h="svelte-1mhftpo">Live Resource Managing</span>`;
            }
          }
        )} ${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          {
            class: "border-b-[1px] border-white ",
            open: open[1][2]
          },
          {},
          {
            content: () => {
              return `<span class="text-md font-extralight" data-svelte-h="svelte-dj8zya">Using a diagram to accomplish all of your development tasks
                  results in one simple to use interface at the heart of all of
                  your infrastructure needs.</span>`;
            },
            summary: () => {
              return `<span class="text-lg" data-svelte-h="svelte-13o26er">Simple Interface</span>`;
            }
          }
        )}`;
      }
    })}</div></div></div> <div class="bg-secondary-50 building text-on-primary-token relative w-full svelte-lglohr">${validate_component(BlurBackground, "BlurBackground").$$render(
      $$result,
      { this: blurBackgroundComponent },
      {
        this: ($$value) => {
          blurBackgroundComponent = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="moveBackground relative z-20 py-[6vw] w-full h-full"><div class="mx-auto py-16 w-[calc(100%-12vw)] rounded-2xl backgroundGradient svelte-lglohr"><h2 class="w-11/12 md:w-full text-4xl md:text-h2-scale font-bold pb-16 text-center text-[var(--dark-color)]" data-svelte-h="svelte-fgn61k">Building for the <span class="text-gradient svelte-lglohr">future</span></h2> <div class="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10 pb-16"><p class="mx-auto md:mx-0 w-11/12 md:w-3/12 text-xl md:text-2xl font-bold md:font-extrabold text-[var(--dark-color)]" data-svelte-h="svelte-gyosa9">With the introduction of AI, building your entire system will be
              just a few words away…</p> <div class="relative text-on-secondary-token bg-surface-500 w-10/12 md:w-4/12 h-[200px] md:h-auto flex items-center justify-center rounded-2xl"><div class="w-9/12 p-2 text-center font-extrabold"><p class="inline text-gradient svelte-lglohr" data-svelte-h="svelte-1mbcmxc">&quot;</p> <p class="inline text-[var(--light-color)]"${add_attribute("this", writingBlock, 0)} data-svelte-h="svelte-9myity">create a secure and HIPAA-compliant endpoint to access
                  anonymized patient data</p> <p class="inline text-gradient svelte-lglohr" data-svelte-h="svelte-1mbcmxc">&quot;</p></div>  <button class="absolute bg-[var(--light-color)] p-4 rounded-lg bottom-0 translate-y-1/2 transition-all duration-100 delay-0 text-[var(--dark-color)] hover:p-6 active:p-8" data-svelte-h="svelte-194q8b3">Deploy With Rake</button></div></div></div></div></div> <div id="join"><div class="h-[80vh] w-fit mx-auto py-20"><h2 class="text-h2-scale w-fit font-bold pb-10 pr-24" data-svelte-h="svelte-sxo5a0">Revolutionize Your<br> Cloud Development<br>with
          <span class="text-primary-500">Rake</span></h2> ${validate_component(Email, "Email").$$render($$result, {}, {}, {})}</div></div> <footer class="p-10 font-extralight text-sm" data-svelte-h="svelte-1xndbdy">Property of Rake LLC. All rights reserved. 2023</footer></div>`}`;
  } while (!$$settled);
  $$unsubscribe_hue();
  $$unsubscribe_hueComplimentary2();
  $$unsubscribe_hueComplimentary1();
  return $$rendered;
});
export {
  Page as default
};
