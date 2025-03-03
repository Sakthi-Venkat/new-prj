 
 

export default function FAQpage() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked & Question</h2>
      <div className="space-y-5 p-5">
        <details className="bg-white text-black p-5  rounded-lg">
          <summary className="cursor-pointer">Is Theo safe to use?</summary>
          <p className="mt-2 text-white-400">Yes, Theo follows strict security measures.</p>
        </details>
        <details className="bg-white text-red-500 text-bold p-4 rounded-lg">
          <summary className="cursor-pointer">How much does it cost?</summary>
          <p className="mt-2 text-black">Free to start, with premium options.</p>
        </details>
        <details className="bg-white-800 p-4 rounded-lg bg-white text-black ">
          <summary className="cursor-pointer">Can beginners use Theo?</summary>
          <p className="mt-2 text-black-400">Yes! Theo is beginner-friendly.</p>
        </details>
      </div>
    </section>
  );
}

