import { html } from 'lit';
import '../src/xapi-google.js';

export default {
  title: 'XapiGoogle',
  component: 'xapi-google',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <xapi-google
      style="--xapi-google-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </xapi-google>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
