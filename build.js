const fs = require('fs');

const base = {
  BLACK: '#151515',
  WHITE: '#FFFFFF',
  RED: '#FF6188',
  ORANGE: '#FC9867',
  YELLOW: '#FFD966',
  GREEN: '#A8DC76',
  BLUE: '#78DCE8',
  PURPLE: '#AB9EF2',
  GRAY: '#E6E6E6',
};

class Scope {
  constructor(name, foreground, font_style) {
    this.name = name;
    this.scope = name;
    this.foreground = foreground;
    this.font_style = font_style;
  }
}

const { BLACK, WHITE, RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE, GRAY } = base;

const name = `Kvetka`;

const theme = {
  name,
  globals: {
    background: BLACK,
    gutter_foreground: GRAY,
    caret: WHITE,
    selection: WHITE,
    selection_foreground: BLACK,
    tags_options: 'underline',
    brackets_options: 'underline',
    inactive_selection: GRAY,
    line_diff_added: GREEN,
    line_diff_modified: ORANGE,
    line_diff_deleted: RED,
    popup_css: `
      html { 
        color: ${WHITE};
        background-color: ${BLACK};
      }
      a {
        color: ${BLUE}
      }`,
    guide: '#262626',
  },
  rules: [
    new Scope('source', WHITE),
    new Scope('text', WHITE),
    new Scope('entity.name', PURPLE),
    new Scope('entity.other.attribute-name', YELLOW),
    new Scope('entity.other.inherited-class', RED),
    new Scope('storage.modifier.extends.js', BLUE),
    new Scope('variable', RED),
    new Scope('variable.parameter', YELLOW),
    new Scope('variable.function', RED),
    new Scope('support.class', PURPLE),
    new Scope('support.type', PURPLE),
    new Scope('variable.type', PURPLE),
    new Scope('support.type.object', RED),
    new Scope('support.constant', RED),
    new Scope('support.function', RED),
    new Scope('meta.property', ORANGE),
    new Scope('constant', WHITE),
    new Scope('constant.language', BLUE),
    new Scope('constant.character.escape', BLUE),
    new Scope('keyword', BLUE),
    new Scope('string', GREEN),
    new Scope('comment', GRAY),
    new Scope('punctuation.definition.comment', GRAY),
    new Scope('punctuation', WHITE),
  ],
};

fs.writeFileSync(`${name}.sublime-color-scheme`, JSON.stringify(theme), {
  encoding: 'utf8',
});
