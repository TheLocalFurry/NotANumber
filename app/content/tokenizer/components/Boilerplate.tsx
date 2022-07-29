import { Algorithm } from "./Algorithm";
import { styled } from "../../../stitches.config";

import { CharacterList } from "./CharacterList";
import snapshot from "../../../lib/snapshot.macro";

const boilerplate = snapshot(function tokenize(input) {
  let current = 0;
  let tokens = [];

  while (current < input.length) {
    // parse tokens
    debugger;
    current++;
  }

  debugger;
  return tokens;
});

const input = `function hello() {
  console.log('hello, world!')
}`;

export function Boilerplate() {
  return (
    <Algorithm algorithm={boilerplate} initialInputs={[input]}>
      {(context) => (
        <Wrapper>
          <CharacterList state={context.state} />
        </Wrapper>
      )}
    </Algorithm>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
