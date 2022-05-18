export default function Thrower() {
  const thrower = () => {
    const obj = {};

    const bar = obj.bar;

    console.log(obj.foo(bar));
  };

  return <button onClick={thrower}>throw me! V3</button>;
}
