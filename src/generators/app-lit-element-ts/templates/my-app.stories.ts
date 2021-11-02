import { html, TemplateResult } from 'lit';
import '../src/<%= pkgName %>.js';

export default {
  title: '<%= className %>',
  component: '<%= pkgName %>',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <<%= pkgName %> style="--<%= pkgName %>-background-color: ${backgroundColor}" .title=${title}></<%= pkgName %>>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
