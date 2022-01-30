import { IconDefinition, icon, dom } from '@fortawesome/fontawesome-svg-core';
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'x-icon',
  styleUrl: 'x-icon.scss',
  shadow: true,
})
export class XIcon {
  @Prop() icon: IconDefinition;
  @Prop() spin = false;

  get iconClassList() {
    let classes = {
      'fa-spin': this.spin,
    };

    return Object.keys(classes)
      .map(key => (classes[key] ? key : null))
      .filter(key => key);
  }

  render() {
    return (
      <Host>
        <style innerHTML={dom.css()}></style>
        <span innerHTML={icon(this.icon, { classes: this.iconClassList }).html[0]}></span>
      </Host>
    );
  }
}