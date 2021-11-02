import { html } from 'lit';
import '../src/<%= pkgName %>.js';

export default {
  title: '<%= className %>',
  component: '<%= pkgName %>',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <<%= pkgName %>
      style="--<%= pkgName %>-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </<%= pkgName %>>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
