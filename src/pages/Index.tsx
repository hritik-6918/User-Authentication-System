import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to Your App</h1>
        <p className="text-xl text-muted-foreground">
          {user ? "Manage your profile and settings" : "Sign in to get started"}
        </p>
        <div className="space-x-4">
          {user ? (
            <Button asChild>
              <Link to="/profile">Go to Profile</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;