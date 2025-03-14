// import styles from './page.module.css'
// // import ExampleClient from '@/components/ExampleClient';
// // import ExampleServer from '@/components/ExampleServer';
// import Example from './Example';
// export default function Home() {
//   // console.log("Where do i render?");

//   return (
//     <main className={styles.main}>
//       <h2>Hello</h2>

//       {/* <ExampleClient/> */}
//       {/* <ExampleServer/> */}

//       <Example/>
//     </main>
//   );
// }

"use client";
export default function Home() {
  function example() {
    alert("I am clicked");
  }

  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <main>
      {/* <button onClick={example}>Please Click</button> */}
      <input
        type="text"
        placeholder="Please write something"
        onChange={handleChange}
      />
    </main>
  );
}
