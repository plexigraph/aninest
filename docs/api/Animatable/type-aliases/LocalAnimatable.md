[aninest](../../index.md) / [Animatable](../index.md) / LocalAnimatable

# LocalAnimatable\<T\>

```ts
type LocalAnimatable<T>: { [P in keyof T]: T[P] extends number ? number : undefined } & Animatable;
```

A local slice of the Animatable type.

## Example

```ts
const startingState = {a: {x: 0, y: 0}, b: 0}
// the following are the local slices of the type of the startingState:
// looking at the root level
{b: 0}
// looking at the 'a' child
{ x: 0, y: 0 }
```

## Type parameters

• **T**

## Source

[Animate/Animatable.ts:105](https://github.com/zphrs/aninest/blob/df0807b/src/Animate/Animatable.ts#L105)
