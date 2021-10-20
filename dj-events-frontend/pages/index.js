import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

// runs this everytime we come home page
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  console.log(events);
  return {
    props: { events },
    revalidate: 1,
  };
}
