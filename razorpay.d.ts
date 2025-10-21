// razorpay.d.ts
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string; // Add order_id for server-side order creation
  handler: (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string; }) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
}

declare global {
  // FIX: Add type definitions for Vite environment variables to resolve issues with `import.meta.env`.
  interface ImportMetaEnv {
    readonly VITE_RAZORPAY_KEY_ID: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
  }
}

// This export is necessary to make the file a module
export {};