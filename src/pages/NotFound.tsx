
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-md w-full space-y-8">
        <div>
          <img 
            src="/lovable-uploads/b667d8da-b7b9-4145-b54d-c343f34003c0.png" 
            alt="Kind Access Logo" 
            className="mx-auto h-16 w-auto" 
          />
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            404
          </h1>
          <p className="mt-2 text-3xl font-bold text-primary">Page Not Found</p>
          <p className="mt-4 text-xl text-gray-600">
            We're sorry, but the page you're looking for doesn't exist.
          </p>
        </div>
        <div className="mt-8">
          <Link to="/">
            <Button className="w-full flex items-center justify-center py-6">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
