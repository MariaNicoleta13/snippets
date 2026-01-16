import { db } from "@/db";
import { redirect } from "next/navigation";

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    // this is a server action
    "use server";

    // validate user inputs
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // create a new record in db
    const dbSNipper = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(dbSNipper);

    // go to homepage once done
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3b">Create New Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          ></input>
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
          ></textarea>
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
