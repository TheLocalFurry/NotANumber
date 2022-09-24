import * as LayoutExample from './_dist-content/framer-magic-motion/components/LayoutExample/LayoutExample.stories'
import * as Tokenizer from './_dist-content/tokenizer/components/Tokenizer/Tokenizer.stories'
import * as TopDownParser from './experiments/TopDownParser/TopDownParser.stories'
export const stories = [{ name: `framer-magic-motion`, stories: [{ name: 'LayoutExample', variants: LayoutExample }] },
{ name: `tokenizer`, stories: [{ name: 'Tokenizer', variants: Tokenizer }] },
{ name: `experiments`, stories: [{ name: 'TopDownParser', variants: TopDownParser }] }];