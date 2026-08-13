import Script from "next/script";
import { YOYO_CAPTURE_SCRIPT } from "@/lib/yoyo";

export default function YoyoCaptureScript() {
  return <Script src={YOYO_CAPTURE_SCRIPT} strategy="afterInteractive" />;
}
