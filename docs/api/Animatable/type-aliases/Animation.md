[aninest](../../index.md) / [Animatable](../index.md) / Animation

# Animation\<Animating\>

```ts
type Animation<Animating>: AnimationWithoutChildren<Animating> & Object;
```

The animation object. This is a recursive type, meaning that it can contain other animations.

## Example

```ts
const anim: Animation<{a: Vec2}> = createAnimation({a: {x: 0, y: 0}}) 
// the anim object will look like this:
 {
   <private fields>
   children: {
   a: {
     // holds the state of a, which is currently {x: 0, y: 0}
     <private fields>
   }
 }
```

## Type declaration

### children

```ts
readonly children: { [P in keyof Animating]: Animating[P] extends number ? undefined : Animation<RecursiveAnimatable<Animating[P]>> };
```

## Type parameters

• **Animating** extends [`RecursiveAnimatable`](RecursiveAnimatable.md)\<`unknown`\>

## Source

[Animate/Animatable.ts:179](https://github.com/zphrs/aninest/blob/729a7d6/src/Animate/Animatable.ts#L179)
