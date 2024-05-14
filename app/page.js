import { createClient } from "@/utils/supabase/server";
import Naslovna from "@/components/bedem/Naslovna";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  if (!isSupabaseConnected) {
    return <div>Supabase not connected</div>;
  }

  return (
    <>
      <Naslovna />
    </>
  );
}
