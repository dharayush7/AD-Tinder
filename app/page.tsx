import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { getUserById, getUserWithNoConnection } from "./neo4j.action";
import HomepageComponents from "./components/Home";
export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect(
      "/api/auth/login?post_login_redirect_url=http://localhost:3000/callback"
    );
  }

  const user = await getUser();

  if (!user) {
    return redirect(
      "/api/auth/login?post_login_redirect_url=http://localhost:3000/callback"
    );
  }

  const usersWithNoConnection = await getUserWithNoConnection(user.id);
  const currentUser = await getUserById(user.id);

  return (
    <main>
      {currentUser ? (
        <HomepageComponents
          currentUser={currentUser}
          users={usersWithNoConnection}
        />
      ) : (
        // <pre>
        //   <code>{JSON.stringify(usersWithNoConnection)}</code>
        // </pre>
        <></>
      )}
    </main>
  );
}
