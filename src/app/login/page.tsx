import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <section className="px-6 py-12 h-full w-full flex justify-center items-center">
        <div className="bg-darkLight px-8 py-10">
          <LoginForm />
        </div>
      </section>
    </>
  );
}
