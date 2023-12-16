import { Avatar, Spin } from "antd";
import Header from "components/Header";
import { FormEvent, useLayoutEffect, useRef, useState } from "react";

function scrollToBottom(el: HTMLElement) {
  el.scrollTop = el.scrollHeight;
}

export default function AiAssistant() {
  const assistantRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    if (!formRef.current) return;
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const message = formData.get("prompt") as string;
    const newHistory = history.concat(message);
    setHistory(newHistory);
    formRef.current.reset();
    const response = await fetch(
      `https://capstone-fitness.up.railway.app/api/chat`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          message,
        }),
      }
    );
    const json = await response.json();
    setHistory(newHistory.concat(json.message));
    setLoading(false);
    scrollToBottom(assistantRef.current!);
  };
  useLayoutEffect(() => {
    scrollToBottom(assistantRef.current!);
  }, []);
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex flex-col max-w-7xl mx-auto pt-16 px-4 h-screen overflow-hidden">
        <div className="flex gap-12 flex-1 items-start my-6 h-full">
          <div className="w-full h-full">
            <div className="flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-medium text-blue-500 text-center">
                  Chat with Assistant
                </h3>
                <div
                  className="mt-4 flex flex-col gap-6 pb-[100px] h-[500px]"
                  ref={assistantRef}
                >
                  {history.map((message) => (
                    <div key={message} className="flex gap-4">
                      <Avatar size="small" />
                      <pre className="whitespace-pre-wrap flex-1 text-sm">
                        {message}
                      </pre>
                    </div>
                  ))}
                  <div className="mt-4">{loading && <Spin />}</div>
                </div>
              </div>
              <div className="fixed bottom-0 left-0 right-0 bg-gray-200 p-6">
                <form
                  onSubmit={handleSubmit}
                  className="flex gap-4 max-w-6xl mx-auto"
                  autoComplete="off"
                  ref={formRef}
                >
                  <input
                    type="text"
                    className="w-full border boder-gray-200 rounded-md flex-1"
                    placeholder="Enter you prompt here.."
                    name="prompt"
                  />
                  <button className="py-2 px-4 bg-blue-500 rounded-lg text-sm text-white w-fit font-bold mx-auto">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
