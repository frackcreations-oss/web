/** YOYO CRM public form capture — token from yoyocrm.io embed */
export const YOYO_CAPTURE_TOKEN = "0a9bafd1-0fd7-4424-9d99-0b216f4de3d2";
export const YOYO_CAPTURE_ACTION = "https://yoyocrm.io/api/capture/leads";
export const YOYO_CAPTURE_SCRIPT = "https://yoyocrm.io/yoyo-capture.js";

/** Bind if the official script missed the form (Next.js / locale change). */
export function ensureYoyoFormBound(form: HTMLFormElement) {
  if (form.dataset.yoyoBound === "1") return;

  const token = (form.getAttribute("data-yoyo-capture") || "").trim();
  if (!token) return;

  form.dataset.yoyoBound = "1";
  const postUrl =
    (form.getAttribute("data-yoyo-action") || "").trim() || YOYO_CAPTURE_ACTION;
  const successMsg =
    form.getAttribute("data-yoyo-success") ||
    "Thanks, we received your details and will be in touch soon.";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector<HTMLButtonElement>('[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.dataset.yoyoLabel = btn.dataset.yoyoLabel || btn.textContent || "";
      btn.textContent = "Sending…";
    }

    const fd = new FormData(form);
    const body = new FormData();
    body.append("token", token);
    fd.forEach((value, key) => {
      if (key === "token" || typeof value !== "string") return;
      if (body.has(key)) body.set(key, `${body.get(key)}, ${value}`);
      else body.append(key, value);
    });

    try {
      const params = new URLSearchParams(window.location.search);
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((k) => {
        const v = params.get(k);
        if (v && !body.get(k)) body.append(k, v);
      });
      if (!body.get("page_url")) body.append("page_url", window.location.href);
      if (!body.get("referrer") && document.referrer) body.append("referrer", document.referrer);
    } catch {
      /* ignore */
    }

    fetch(postUrl, { method: "POST", body, mode: "cors" })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error((data as { error?: string }).error || "Could not submit. Please try again.");
        const box = document.createElement("div");
        box.setAttribute("role", "status");
        box.textContent = successMsg;
        form.replaceWith(box);
      })
      .catch((err: Error) => {
        let existing = form.querySelector<HTMLElement>("[data-yoyo-error]");
        if (!existing) {
          existing = document.createElement("p");
          existing.setAttribute("data-yoyo-error", "");
          form.appendChild(existing);
        }
        existing.textContent = err.message || "Network error.";
        if (btn) {
          btn.disabled = false;
          btn.textContent = btn.dataset.yoyoLabel || "Send";
        }
      });
  });
}
