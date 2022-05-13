export default function Thrower() {
  const thrower = () => {
    const obj = {};

    console.log(obj.foo());
  };

  return <button onClick={thrower}>throw me! V2</button>;
}
