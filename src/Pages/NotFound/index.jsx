import {Link} from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section className="bg-white rounded-lg">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1
              className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's
              missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500">The page you're looking for doesnt exist.</p>
            <Link to="/"
                  className="text-white bg-blue-primary hover:bg-white hover:border-blue-primary rounded-md px-2 py-1.5 hover:text-blue-primary transition-all border-2 border-white font-medium"
            >Back
              to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}