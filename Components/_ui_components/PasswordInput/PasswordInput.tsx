import { useState } from "react";
import styles from "@/styles/_ui_components/PasswordInput/passwordInput.module.scss";

interface IpasswordInput<T> {
  label: string;
  password: string;
  setState: React.Dispatch<React.SetStateAction<T>>;
  autoComplete: string;
  id: string;
  name: string;
  htmlFor: string;
}

const PasswordInput = <T,>({
  label,
  password,
  setState,
  autoComplete,
  id,
  name,
  htmlFor,
}: IpasswordInput<T>) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const stateName = id.split("-")[id.split("-").length - 1];
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={styles["password-input-label-wrapper"]}
      >
        <div>
          {label}
          <span>*</span>
        </div>
        <div>
          <svg
            width="30px"
            height="23.2px"
            version="1.1"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            onClick={() => setShowPassword((prev: boolean) => !prev)}
          >
            <defs>
              <symbol id="n" overflow="visible">
                <path d="m29.312-1.75c-1.5117 0.78125-3.0898 1.3711-4.7344 1.7656-1.6367 0.40625-3.3398 0.60938-5.1094 0.60938-5.3125 0-9.5273-1.4844-12.641-4.4531-3.1055-2.9688-4.6562-7-4.6562-12.094s1.5508-9.125 4.6562-12.094c3.1133-2.9688 7.3281-4.4531 12.641-4.4531 1.7695 0 3.4727 0.19922 5.1094 0.59375 1.6445 0.39844 3.2227 0.99219 4.7344 1.7812v6.5938c-1.5312-1.0391-3.0391-1.8008-4.5156-2.2812-1.4805-0.48828-3.0391-0.73438-4.6719-0.73438-2.9375 0-5.2461 0.94531-6.9219 2.8281-1.6797 1.875-2.5156 4.4648-2.5156 7.7656 0 3.293 0.83594 5.8828 2.5156 7.7656 1.6758 1.875 3.9844 2.8125 6.9219 2.8125 1.6328 0 3.1914-0.23828 4.6719-0.71875 1.4766-0.48828 2.9844-1.2539 4.5156-2.2969z" />
              </symbol>
              <symbol id="b" overflow="visible">
                <path d="m21.453-17.406c-0.67969-0.3125-1.3516-0.53906-2.0156-0.6875-0.65625-0.15625-1.3203-0.23438-1.9844-0.23438-1.9688 0-3.4844 0.63281-4.5469 1.8906-1.0547 1.2617-1.5781 3.0703-1.5781 5.4219v11.016h-7.6562v-23.922h7.6562v3.9219c0.97656-1.5625 2.1016-2.7031 3.375-3.4219 1.2812-0.71875 2.8125-1.0781 4.5938-1.0781 0.25 0 0.52344 0.011719 0.82812 0.03125 0.30078 0.023438 0.73438 0.070312 1.2969 0.14062z" />
              </symbol>
              <symbol id="a" overflow="visible">
                <path d="m27.562-12.031v2.1875h-17.891c0.1875 1.793 0.83203 3.1367 1.9375 4.0312 1.1133 0.89844 2.6719 1.3438 4.6719 1.3438 1.6016 0 3.25-0.23438 4.9375-0.70312 1.6875-0.47656 3.4219-1.2031 5.2031-2.1719v5.8906c-1.8047 0.6875-3.6094 1.2031-5.4219 1.5469-1.8125 0.35156-3.6211 0.53125-5.4219 0.53125-4.3359 0-7.7031-1.0977-10.109-3.2969-2.3984-2.207-3.5938-5.2969-3.5938-9.2656 0-3.9062 1.1758-6.9727 3.5312-9.2031 2.3633-2.2383 5.6094-3.3594 9.7344-3.3594 3.7578 0 6.7695 1.1367 9.0312 3.4062 2.2578 2.2617 3.3906 5.2812 3.3906 9.0625zm-7.8594-2.5312c0-1.457-0.42969-2.6289-1.2812-3.5156-0.84375-0.89453-1.9492-1.3438-3.3125-1.3438-1.4922 0-2.6992 0.41797-3.625 1.25-0.91797 0.83594-1.4922 2.0391-1.7188 3.6094z" />
              </symbol>
              <symbol id="d" overflow="visible">
                <path d="m14.391-10.766c-1.5938 0-2.793 0.27344-3.5938 0.8125-0.80469 0.54297-1.2031 1.3398-1.2031 2.3906 0 0.96875 0.32031 1.7305 0.96875 2.2812 0.64453 0.54297 1.5469 0.8125 2.7031 0.8125 1.4375 0 2.6445-0.51562 3.625-1.5469 0.98828-1.0312 1.4844-2.3203 1.4844-3.875v-0.875zm11.688-2.8906v13.656h-7.7031v-3.5469c-1.0312 1.4492-2.1875 2.5078-3.4688 3.1719s-2.8398 1-4.6719 1c-2.4805 0-4.4961-0.72266-6.0469-2.1719-1.543-1.4453-2.3125-3.3203-2.3125-5.625 0-2.8125 0.96094-4.8672 2.8906-6.1719 1.9375-1.3125 4.9688-1.9688 9.0938-1.9688h4.5156v-0.60938c0-1.207-0.48047-2.0938-1.4375-2.6562-0.94922-0.5625-2.4375-0.84375-4.4688-0.84375-1.6367 0-3.1562 0.16797-4.5625 0.5-1.4062 0.32422-2.7188 0.8125-3.9375 1.4688v-5.8281c1.6445-0.40625 3.2891-0.70703 4.9375-0.90625 1.6562-0.20703 3.3047-0.3125 4.9531-0.3125 4.3203 0 7.4375 0.85547 9.3438 2.5625 1.9141 1.6992 2.875 4.4609 2.875 8.2812z" />
              </symbol>
              <symbol id="h" overflow="visible">
                <path d="m12.031-30.719v6.7969h7.875v5.4688h-7.875v10.141c0 1.1172 0.21875 1.8711 0.65625 2.2656 0.4375 0.38672 1.3125 0.57812 2.625 0.57812h3.9375v5.4688h-6.5625c-3.0234 0-5.1641-0.62891-6.4219-1.8906-1.2617-1.2578-1.8906-3.3984-1.8906-6.4219v-10.141h-3.7969v-5.4688h3.7969v-6.7969z" />
              </symbol>
              <symbol id="c" overflow="visible">
                <path d="m19.953-20.422v-12.812h7.6875v33.234h-7.6875v-3.4531c-1.0547 1.4062-2.2148 2.4375-3.4844 3.0938-1.2734 0.65625-2.7422 0.98438-4.4062 0.98438-2.9492 0-5.3711-1.1719-7.2656-3.5156-1.8867-2.3438-2.8281-5.3594-2.8281-9.0469s0.94141-6.7031 2.8281-9.0469c1.8945-2.3438 4.3164-3.5156 7.2656-3.5156 1.6562 0 3.1172 0.33594 4.3906 1 1.2812 0.65625 2.4453 1.6836 3.5 3.0781zm-5.0469 15.484c1.6445 0 2.8945-0.59766 3.75-1.7969 0.86328-1.1953 1.2969-2.9297 1.2969-5.2031 0-2.2812-0.43359-4.0195-1.2969-5.2188-0.85547-1.1953-2.1055-1.7969-3.75-1.7969-1.625 0-2.8711 0.60156-3.7344 1.7969-0.85547 1.1992-1.2812 2.9375-1.2812 5.2188 0 2.2734 0.42578 4.0078 1.2812 5.2031 0.86328 1.1992 2.1094 1.7969 3.7344 1.7969z" />
              </symbol>
              <symbol id="g" overflow="visible">
                <path d="m16.406-4.9375c1.6328 0 2.8828-0.59766 3.75-1.7969 0.86328-1.1953 1.2969-2.9297 1.2969-5.2031 0-2.2812-0.43359-4.0195-1.2969-5.2188-0.86719-1.1953-2.1172-1.7969-3.75-1.7969-1.6367 0-2.8906 0.60547-3.7656 1.8125-0.875 1.1992-1.3125 2.9336-1.3125 5.2031 0 2.2617 0.4375 3.9961 1.3125 5.2031 0.875 1.1992 2.1289 1.7969 3.7656 1.7969zm-5.0781-15.484c1.0508-1.3945 2.2188-2.4219 3.5-3.0781 1.2812-0.66406 2.7539-1 4.4219-1 2.9453 0 5.3672 1.1719 7.2656 3.5156 1.8945 2.3438 2.8438 5.3594 2.8438 9.0469s-0.94922 6.7031-2.8438 9.0469c-1.8984 2.3438-4.3203 3.5156-7.2656 3.5156-1.668 0-3.1406-0.33594-4.4219-1s-2.4492-1.6914-3.5-3.0781v3.4531h-7.6562v-33.234h7.6562z" />
              </symbol>
              <symbol id="f" overflow="visible">
                <path d="m0.53125-23.922h7.6562l6.4219 16.234 5.4688-16.234h7.6562l-10.062 26.188c-1.0117 2.6641-2.1953 4.5234-3.5469 5.5781-1.3438 1.0625-3.1211 1.5938-5.3281 1.5938h-4.4219v-5.0156h2.3906c1.3008 0 2.2422-0.21094 2.8281-0.625 0.59375-0.40625 1.0547-1.1484 1.3906-2.2188l0.20312-0.65625z" />
              </symbol>
              <symbol id="e" overflow="visible">
                <path d="m23.375-5.8125h-12.859l-2.0312 5.8125h-8.2656l11.812-31.891h9.7969l11.812 31.891h-8.2656zm-10.812-5.9219h8.7344l-4.3594-12.688z" />
              </symbol>
              <symbol id="m" overflow="visible">
                <path d="m3.6719-33.234h7.6562v33.234h-7.6562z" />
              </symbol>
              <symbol id="l" overflow="visible">
                <path d="m9.7188-12.234-8.625-11.688h8.0938l4.8906 7.0938 4.9531-7.0938h8.0938l-8.625 11.641 9.0625 12.281h-8.0938l-5.3906-7.5625-5.3125 7.5625h-8.1094z" />
              </symbol>
              <symbol id="k" overflow="visible">
                <path d="m27.734-14.562v14.562h-7.7031v-11.156c0-2.0625-0.046875-3.4844-0.14062-4.2656-0.085937-0.78125-0.24219-1.3594-0.46875-1.7344-0.30469-0.5-0.71094-0.88281-1.2188-1.1562-0.51172-0.28125-1.0938-0.42188-1.75-0.42188-1.5938 0-2.8516 0.61719-3.7656 1.8438-0.90625 1.2305-1.3594 2.9375-1.3594 5.125v11.766h-7.6562v-23.922h7.6562v3.5c1.1445-1.3945 2.3633-2.4219 3.6562-3.0781 1.3008-0.66406 2.7383-1 4.3125-1 2.7578 0 4.8516 0.85156 6.2812 2.5469 1.4375 1.6875 2.1562 4.1523 2.1562 7.3906z" />
              </symbol>
              <symbol id="j" overflow="visible">
                <path d="m-0.42188-31.891h8.9844l7.2656 11.359 7.2656-11.359h9.0156l-12.156 18.453v13.438h-8.2188v-13.438z" />
              </symbol>
              <symbol id="i" overflow="visible">
                <path d="m15.062-19.031c-1.6992 0-2.9961 0.60938-3.8906 1.8281-0.88672 1.2188-1.3281 2.9766-1.3281 5.2656 0 2.293 0.44141 4.0469 1.3281 5.2656 0.89453 1.2188 2.1914 1.8281 3.8906 1.8281 1.6641 0 2.9375-0.60938 3.8125-1.8281 0.88281-1.2188 1.3281-2.9727 1.3281-5.2656 0-2.2891-0.44531-4.0469-1.3281-5.2656-0.875-1.2188-2.1484-1.8281-3.8125-1.8281zm0-5.4688c4.1133 0 7.3281 1.1094 9.6406 3.3281s3.4688 5.2969 3.4688 9.2344c0 3.9297-1.1562 7.0078-3.4688 9.2344-2.3125 2.2188-5.5273 3.3281-9.6406 3.3281-4.1367 0-7.3711-1.1094-9.7031-3.3281-2.3242-2.2266-3.4844-5.3047-3.4844-9.2344 0-3.9375 1.1602-7.0156 3.4844-9.2344 2.332-2.2188 5.5664-3.3281 9.7031-3.3281z" />
              </symbol>
            </defs>
            <g>
              <path d="m537.69 323.75c-3.7617-0.011719-7.418-1.2383-10.426-3.4922-3.0117-2.2539-5.2148-5.4141-6.2852-9.0195-1.2266-3.7617-31.5-95.812-170.98-95.812s-169.75 92.051-170.98 96.25c-1.8125 5.9844-6.6797 10.551-12.773 11.973-6.0898 1.4219-12.477-0.51172-16.754-5.0742s-5.7969-11.062-3.9844-17.051c1.4883-5.25 38.238-121.1 204.49-121.1s203 115.85 204.49 120.84c1.3242 4.4805 0.80078 9.3008-1.4531 13.395-2.25 4.0898-6.043 7.1133-10.535 8.3945-1.5703 0.42578-3.1875 0.66016-4.8125 0.69922zm-101.24-4.375c0.023437-22.934-9.0664-44.934-25.27-61.164-16.199-16.23-38.188-25.359-61.121-25.375-22.934-0.015626-44.934 9.082-61.156 25.293-16.227 16.207-25.344 38.195-25.352 61.129-0.007812 22.934 9.0977 44.93 25.309 61.148 16.215 16.219 38.207 25.332 61.141 25.332 22.906-0.023437 44.867-9.1289 61.074-25.316 16.203-16.188 25.328-38.141 25.375-61.047zm-35 0c0 13.645-5.418 26.73-15.07 36.379-9.6484 9.6523-22.734 15.07-36.379 15.07s-26.73-5.418-36.379-15.07c-9.6523-9.6484-15.07-22.734-15.07-36.379s5.418-26.73 15.07-36.379c9.6484-9.6523 22.734-15.07 36.379-15.07s26.73 5.418 36.379 15.07c9.6523 9.6484 15.07 22.734 15.07 36.379z" />
            </g>
          </svg>
        </div>
      </label>
      <input
        type={showPassword ? "text" : "password"}
        id={id}
        value={password}
        name={name}
        autoComplete={autoComplete}
        onChange={(event) =>
          setState((prev) => ({
            ...prev,
            [stateName]: event.target.value,
          }))
        }
        // onBlur={() => blurCheck("password")(password)}
      />
    </>
  );
};

export default PasswordInput;
