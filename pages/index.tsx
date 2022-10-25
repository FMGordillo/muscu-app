import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="bg-white dark:bg-dark">
        <h1 className="text-3xl">Hello world</h1>
        <p>This is the future.</p>
      </div>
    </Layout>
  );
}
