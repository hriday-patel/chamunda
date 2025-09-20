const Main = () => {
  return (
    <main className="grow flex flex-col w-full">
      <section className="relative w-full h-auto">
        <div className="inset-0 absolute bg-cover bg-center bg-[url('/image.jpeg')]"></div>
        <div className="inset-0 absolute bg-cover bg-center bg-black/40"></div>
        <div className="relative container mx-auto py-24">
          <div className="container max-w-7xl mx-auto p-12 flex flex-col gap-[50px] justify-center items-center sm:p-14 md:p-18 lg:p-24">
            <h1 className="text-white text-center text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
              Enlightenment is the key to habitat. Encouraging those who are in
              need.
            </h1>
            <p className="text-white tracking-normal leading-none text-2xl font-light max-w-4xl text-center">
              Meditate and relax your soul while uplifting the spirit and
              achieving greater success
            </p>
          </div>
          <div className="flex justify-center items-center p-2">
            <button className="leading-normal tracking-normal text-white font-semibold bg-hriday sm:bg-transparent cursor-pointer hover:opacity-80 mt-2 px-8 py-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 duration-300 ease-linear group overflow-hidden">
              <span className="truncate text-lg z-10 relative">Explore Our Services</span>
              <span className="absolute inset-0 scale-0 origin-bottom-left group-hover:scale-100 bg-hriday transition-transform duration-300 ease-in-out "></span>
            </button>
          </div>
        </div>
      </section>
      <section className="relative w-full h-auto">
        <div className="inset-0 absolute bg-cover bg-center bg-white"></div>
        <div className="relative container mx-auto p-12">
          <div className="container max-w-7xl mx-auto p-6 flex flex-col gap-[20px] justify-center items-center sm:p-7 md:p-9 lg:p-12 grow">
            <h1 className="text-black text-center text-3xl font-bold tracking-widest leading-none md:text-4xl lg:text-5xl">
              Why we matter?
            </h1>
            <p className="text-slate-700 tracking-normal leading-none text-xl font-light max-w-4xl text-center sm:text-2xl">
              Our dedication to inner growth and mindful practice guides us. We
              provide personalized techniques to nurture your spiritual journey.
            </p>
          </div>
          <div className="flex justify-center items-center gap-[30px] flex-wrap">
            <div className="max-w-sm bg-slate-100/85 min-h-[225px] rounded-lg py-2 px-6 border border-slate-950/5 shadow-lg hover:shadow-2xl flex flex-col gap-[10px] ">
              <div className="w-[48px] h-[48px] bg-hriday/90 flex justify-center items-center rounded-md mt-6">
                <svg
                  fill="#fff"
                  height="36"
                  width="36"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 297 297"
                  xml:space="preserve"
                >
                  <path
                    d="M292.088,140.81c-4.914-21.099-14.29-37.816-27.112-48.346c-5.173-4.247-10.862-7.391-16.871-9.425
	c7.904-5.428,12.853-10.021,13.413-10.55c3.169-2.989,3.539-7.9,0.853-11.33l-20.527-26.213c-1.478-1.888-3.689-3.056-6.081-3.215
	c-2.383-0.155-4.737,0.708-6.451,2.384c-12.882,12.596-25.614,20.184-37.999,22.704l18.151-19.638c2.986-3.23,2.986-8.214,0-11.444
	l-21.288-23.03C186.582,0.981,184.338,0,181.987,0c-0.009,0-0.018,0-0.027,0c-2.36,0.008-4.609,1.004-6.201,2.748l-22.048,24.163
	c-3.044,3.337-2.918,8.48,0.287,11.664l18.12,17.996c-22.057-5.209-36.012-25.901-36.293-26.324
	c-2.356-3.606-7.054-4.86-10.893-2.896c-3.843,1.963-5.583,6.512-4.03,10.54c5.596,14.515,12.159,26.614,19.652,36.265
	c-7.254-7.569-15.925-12.843-25.749-15.529c-23.72-6.482-53.653,1.951-86.579,24.386c-1.848,1.259-3.121,3.202-3.536,5.399
	c-0.416,2.198,0.058,4.471,1.318,6.318l15.965,23.408c2.53,3.709,7.518,4.786,11.351,2.449
	c13.811-8.414,46.761-22.857,54.713-10.944c2.233,3.344,2.575,6.7,1.047,10.26c-2.833,6.598-13.091,14.896-33.383,18.401
	c-4.283,0.74-7.301,4.613-6.972,8.946l3.041,40.02c0.324,4.274,3.825,7.624,8.109,7.786c6.411,0.24,24.671,3.115,32.079,13.384
	c3.953,5.48,4.566,12.642,1.871,21.895c-0.994,3.413-4.045,13.78-20.843,13.339c-13.532-0.369-30.454-7.593-45.266-19.326
	c-15.925-12.614-27.154-28.846-30.807-44.534c-0.989-4.247-5.046-7.035-9.373-6.438c-4.319,0.601-7.466,4.397-7.258,8.753
	c0.055,1.154,1.491,28.579,13.625,56.39C30.604,276.778,59.279,297,96.836,297c24.36,0,42.646-7.827,54.352-23.264
	c18.878-24.894,14.312-62.273,11.102-78.543c14.185-5.11,43.974-18.927,62.626-49.473c3.406-5.581,8.084-7.894,13.179-6.507
	c7.517,2.044,15.746,12.365,16.052,30.197c0.428,24.921-12.099,40.03-23.966,45.859c-9.092,4.466-18.536,4.202-24.646-0.685
	c-5.704-4.563-9.566-13.905-10.567-17.101c-1.183-3.845-4.914-6.32-8.92-5.907c-4.002,0.412-7.155,3.594-7.53,7.601
	c-0.146,1.562-3.372,38.523,14.762,59.412c7.567,8.718,17.564,13.433,29.712,14.013c21.117,0.993,39.182-6.728,52.226-22.377
	C295.637,225.727,302.102,183.801,292.088,140.81z M182.027,20.893l9.768,10.567l-10.067,10.891l-10.114-10.045L182.027,20.893z
	 M175.571,74.261c19.605,2.167,39.285-5.146,58.618-21.744l9.872,12.607c-11.07,8.547-36.067,24.769-60.498,19.219
	c-8.779-1.994-16.817-6.701-24.075-14.078C164.424,72.196,169.793,73.624,175.571,74.261z M179.829,100.784
	c3.994,0.907,7.96,1.364,11.879,1.489c-2.894,4.349-5.442,8.999-7.963,13.599c-9.335,17.042-18.268,33.358-43.71,38.109
	c6.467-6.027,12.554-13.633,15.992-22.773c4.532-12.045,3.81-24.582-2.142-37.261c-2.374-5.055-5.12-9.623-8.186-13.713
	C155.642,90.999,167.041,97.88,179.829,100.784z M28.613,230.022c19,18.15,43.723,29.957,63.916,30.507
	c18.983,0.521,32.625-8.771,37.49-25.479c4.193-14.4,2.701-26.693-4.433-36.536c-9.702-13.385-27.412-17.965-37.534-19.52
	l-1.95-25.651c19.301-4.788,33.129-14.336,38.474-26.787c3.793-8.831,2.899-18.162-2.516-26.274
	c-15.714-23.539-54.184-6.698-70.519,1.96l-6.76-9.911c25.777-16.129,48.34-22.153,65.578-17.44
	c12.144,3.32,21.654,12.143,28.264,26.222c3.993,8.505,4.531,16.39,1.644,24.106c-7.082,18.931-32.125,30.176-32.363,30.28
	c-3.531,1.544-5.566,5.286-4.941,9.09c0.624,3.802,3.747,6.698,7.588,7.033c26.028,2.266,46.033-2.018,61.142-13.106
	c13.242-9.716,20.466-22.906,26.84-34.543c7.852-14.335,13.219-23.25,24.133-25.781c24.691-5.724,44.997,12.072,53.001,46.442
	c8.705,37.374,3.444,74.584-13.403,94.797c-9.664,11.593-22.601,17.08-38.47,16.331c-7.46-0.356-13.269-3.038-17.76-8.198
	c-4.271-4.907-6.913-11.406-8.529-17.996c11.101,7.3,26.17,7.682,40.11,0.834c16.512-8.111,33.954-28.469,33.391-61.282
	c-0.458-26.673-14.638-42.411-28.488-46.177c-12.4-3.372-24.664,1.987-31.993,13.99c-20.925,34.271-59.816,44.282-60.189,44.374
	c-2.217,0.541-4.118,1.963-5.272,3.932c-1.154,1.968-1.46,4.326-0.848,6.524c0.129,0.463,12.657,46.626-6.488,71.818
	c-8.35,10.987-22.108,16.558-40.892,16.558C66.196,280.14,42.632,261.855,28.613,230.022z"
                  />
                </svg>
              </div>
              <div className="container mx-auto flex flex-col justify-between max-w-xs gap-[10px]">
                <h2 className="font-bold text-2xl tracking-tighter">
                  Peaceful captivate
                </h2>
                <p className="text-slate-500 tracking-tight leading-normal font-normal font-sans">
                  Awaken quiet wisdom within to guide your steps and light your
                  path.
                </p>
              </div>
            </div>
            <div className="max-w-sm bg-slate-100/85 min-h-[225px] rounded-lg py-2 px-6 border border-slate-950/5 shadow-lg hover:shadow-2xl flex flex-col gap-[10px]">
              <div className="w-[48px] h-[48px] bg-hriday/90 flex justify-center items-center rounded-md mt-6">
                <svg
                  fill="#fff"
                  height="36"
                  width="36"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 297 297"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M148.5,102.433c26.485,0,48.861-23.244,48.861-50.758c0-26.335-21.463-46.965-48.861-46.965S99.639,25.34,99.639,51.675
		C99.639,79.189,122.015,102.433,148.5,102.433z M148.5,23.872c16.932,0,29.7,11.953,29.7,27.803
		c0,16.832-13.879,31.597-29.7,31.597s-29.7-14.765-29.7-31.597C118.8,35.825,131.568,23.872,148.5,23.872z"
                    />
                    <path
                      d="M258.471,292.29c21.245,0,38.529-17.285,38.529-38.53c0-8.813-3.577-16.887-8.459-24.073
		c-8.187-12.05-45.416-78.962-64.361-99.691c-16.204-17.729-54.01-25.703-75.68-25.703s-59.476,7.974-75.68,25.703
		c-18.945,20.729-56.174,87.641-64.361,99.691C3.577,236.872,0,244.946,0,253.759c0,21.246,17.285,38.53,38.529,38.53H258.471z
		 M210.035,142.921c11.928,13.051,33.381,47.863,47.895,72.316c-1.41,0.02-2.824,0.114-4.238,0.29l-25.307,3.163l-26.447-47.963
		c-1.794-3.253-5.564-4.878-9.161-3.954c-3.598,0.926-6.113,4.171-6.113,7.886v49.246l-18.475,2.309l-57.85-4.954v-4.369
		l84.865-83.546C201.434,136.064,206.706,139.279,210.035,142.921z M210.984,220.866l-8.035,1.004v-15.576L210.984,220.866z
		 M94.05,219.866l-7.146-0.612l7.146-12.96V219.866z M86.965,142.921c11.024-12.062,43.27-19.468,61.535-19.468
		c8.626,0,20.37,1.654,31.525,4.668l-69.687,68.604V174.66c0-3.715-2.515-6.96-6.113-7.886c-3.599-0.923-7.368,0.702-9.161,3.954
		l-25.919,47.005l-26.035-2.23c-1.347-0.161-2.695-0.25-4.038-0.269C53.583,190.784,75.033,155.976,86.965,142.921z M23.908,241.355
		c3.109-3.651,11.279-7.072,15.967-6.872c31.868,1.359,127.124,10.862,127.124,10.862l6.081,27.783H38.529
		c-10.68,0-19.368-8.689-19.368-19.369C19.161,250.027,21.58,244.09,23.908,241.355z M273.103,241.373
		c2.316,2.726,4.736,8.669,4.736,12.386c0,10.68-8.688,19.369-19.368,19.369h-65.777l-6.532-29.849l69.906-8.738
		C261.655,233.844,269.454,237.079,273.103,241.373z"
                    />
                  </g>
                </svg>
              </div>
              <div className="container mx-auto flex flex-col justify-between max-w-xs gap-[10px]">
                <h2 className="font-bold text-2xl tracking-tighter">
                  Relaxed Nature
                </h2>
                <p className="text-slate-500 tracking-tight leading-normal font-normal font-sans">
                  We connect with your soul's rhythm to bring serenity beyond
                  imagination.
                </p>
              </div>
            </div>
            <div className="max-w-sm bg-slate-100/85 min-h-[225px] rounded-lg py-2 px-6 border border-slate-950/5 shadow-lg hover:shadow-2xl flex flex-col gap-[10px]">
              <div className="w-[48px] h-[48px] bg-hriday/90 flex justify-center items-center rounded-md mt-6">
                <svg
                  fill="#fff"
                  height="36"
                  width="36"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M510.633,312.157c-1.655-2.867-4.6-4.753-7.896-5.057c-2.145-0.197-47.182-4.084-99.312,11.3
			c26.328-66.804,20.892-130.565,20.604-133.685c-0.304-3.296-2.189-6.241-5.057-7.896c-2.867-1.655-6.359-1.816-9.367-0.43
			c-2.376,1.094-53.024,24.801-96.25,73.73c-12.294-68.888-47.239-119.028-49.03-121.56c-1.911-2.703-5.016-4.31-8.328-4.31
			c-3.312,0-6.416,1.607-8.328,4.31c-1.791,2.531-36.734,52.671-49.03,121.56c-43.226-48.93-93.874-72.636-96.25-73.73
			c-3.006-1.385-6.5-1.225-9.367,0.43s-4.753,4.6-5.057,7.896c-0.289,3.121-5.725,66.883,20.604,133.687
			c-52.132-15.383-97.17-11.499-99.31-11.302c-3.296,0.304-6.241,2.19-7.896,5.057s-1.816,6.359-0.43,9.367
			c1.384,3.007,34.718,74.09,104.598,114.435c51.68,29.838,107.921,33.957,135.047,33.957c7.857,0,13.268-0.346,15.42-0.512
			c2.152,0.167,7.56,0.512,15.42,0.512c27.128,0,83.37-4.122,135.047-33.957c69.88-40.345,103.213-111.428,104.598-114.435
			C512.45,318.518,512.288,315.024,510.633,312.157z M115.733,418.294c-46.299-26.731-75.771-69.419-88.691-91.331
			c19.957,0.158,56.079,2.755,93.151,16.865c1.516,2.888,3.091,5.771,4.748,8.639c26.426,45.771,64.75,77.386,92.361,95.908
			C189.735,445.993,151.155,438.746,115.733,418.294z M142.607,342.268c-30.576-52.959-34.747-112.22-34.81-139.876
			c20.007,11.603,57.699,36.729,87.32,75.55c-0.459,6.178-0.713,12.457-0.713,18.83c0,55.065,18.368,103.46,33.547,134.055
			C202.242,413.426,166.706,384.01,142.607,342.268z M256,439.788c-14.113-24.479-41.197-79.709-41.197-143.016
			S241.889,178.233,256,153.757c14.113,24.479,41.197,79.709,41.197,143.016S270.11,415.312,256,439.788z M317.595,296.771
			c0-6.372-0.254-12.652-0.713-18.829c29.632-38.833,67.34-63.965,87.341-75.561c-0.037,27.613-4.169,86.782-34.829,139.886
			c-24.03,41.622-59.583,71.06-85.315,88.497C299.252,400.166,317.595,351.801,317.595,296.771z M396.267,418.294
			c-35.422,20.45-74.002,27.698-101.568,30.081c27.61-18.522,65.934-50.137,92.359-95.907c1.656-2.869,3.233-5.752,4.75-8.642
			c36.96-14.064,73.145-16.67,93.138-16.844C472.018,348.904,442.55,391.572,396.267,418.294z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M173.386,129.797c-16.59,0-30.088,13.498-30.088,30.088s13.498,30.088,30.088,30.088s30.088-13.498,30.088-30.088
			S189.976,129.797,173.386,129.797z M173.386,169.574c-5.342,0-9.689-4.347-9.689-9.689s4.347-9.689,9.689-9.689
			s9.689,4.347,9.689,9.689S178.729,169.574,173.386,169.574z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M338.613,129.797c-16.59,0-30.088,13.498-30.088,30.088s13.498,30.088,30.088,30.088c16.59,0,30.088-13.498,30.088-30.088
			S355.203,129.797,338.613,129.797z M338.613,169.574c-5.342,0-9.689-4.347-9.689-9.689s4.347-9.689,9.689-9.689
			c5.342,0,9.689,4.347,9.689,9.689S343.956,169.574,338.613,169.574z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M256,42.083c-16.59,0-30.088,13.498-30.088,30.088S239.41,102.259,256,102.259s30.088-13.498,30.088-30.088
			S272.59,42.083,256,42.083z M256,81.86c-5.342,0-9.689-4.347-9.689-9.689s4.347-9.689,9.689-9.689s9.689,4.347,9.689,9.689
			S261.342,81.86,256,81.86z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M266.206,368.497c-5.316-1.86-11.134,0.938-12.998,6.254c-1.253,3.578-2.09,5.565-2.094,5.572
			c-2.208,5.183,0.204,11.174,5.386,13.381c1.303,0.555,2.659,0.818,3.993,0.818c3.964,0,7.735-2.326,9.388-6.204
			c0.108-0.255,1.105-2.614,2.578-6.823C274.323,376.179,271.522,370.359,266.206,368.497z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M286.127,291.364c-0.181-5.63-4.905-10.05-10.521-9.866c-5.63,0.181-10.047,4.892-9.866,10.522
			c0.56,17.412-0.977,35.317-4.569,53.215c-1.109,5.523,2.47,10.898,7.993,12.007c0.677,0.136,1.351,0.201,2.017,0.201
			c4.759,0,9.016-3.349,9.989-8.195C285.07,329.814,286.737,310.34,286.127,291.364z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="container mx-auto flex flex-col justify-between max-w-xs gap-[10px]">
                <h2 className="font-bold text-2xl tracking-tighter">
                  Mental Nourishment
                </h2>
                <p className="text-slate-500 tracking-tight leading-normal font-normal font-sans">
                  Rest assured that your inner peace and clarity are
                  strengthened with our guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-auto">
        <div className="absolute inset-0 bg-slate-100"></div>
        <div className="relative container max-w-7xl mx-auto p-6 flex flex-col gap-[20px] justify-center items-center sm:p-7 md:p-9 lg:p-12 grow">
          <h1 className="text-black text-center text-2xl font-hriday font-bold tracking-normal leading-normal md:text-3xl lg:text-4xl">
            Spiritual Leaders Around The World
          </h1>
          <p className="text-slate-700 tracking-normal leading-normal text-xl font-light max-w-4xl text-center sm:text-2xl">
            Spiritual leaders worldwide have shaped meditation, relaxation, and
            yoga into what we know today, blending philosophy, science, and
            culture over thousands of years.
          </p>
        </div>
        <div className="relative container mx-auto p-4">
          <article className="p-4">
            <div className="md:float-left md:mr-4 mb-4">
              <div className="flex flex-col justify-center items-center gap-[20px]">
                <div className="md:flex md:justify-center overflow-hidden rounded-2xl bg-white max-w-full md:max-w-sm gap-[30px] inset-shadow-slate-300/20 inset-shadow-sm">
                  <div className="md:shrink-0">
                    <img
                      src="/swami2.jpg"
                      className="md:w-24 md:h-full w-full h-24 object-cover hidden md:block"
                    />
                  </div>
                  <div className="container mx-auto flex flex-col justify-between items-center p-6 gap-[10px]">
                    <h2 className="text-xl font-bold tracking-tight italic">
                      Swami Vivekananda ~
                    </h2>
                    <blockquote>
                      <q className="italic font-serif tracking-widest leading-normal">
                        When we strive to become better than we are, everything
                        around us becomes better too.
                      </q>
                    </blockquote>
                  </div>
                </div>
                <div className="md:flex overflow-hidden rounded-2xl bg-white max-w-full md:max-w-sm gap-[30px] inset-shadow-slate-300/20 inset-shadow-sm">
                  <div className="md:shrink-0">
                    <img
                      src="/GautamBuddha.jpg"
                      className="md:w-24 md:h-full w-full h-24 object-cover hidden md:block"
                    />
                  </div>
                  <div className="container mx-auto flex flex-col justify-between items-center p-6 gap-[10px]">
                    <h2 className="text-xl font-bold  tracking-tight italic">
                      Gautam Buddha ~
                    </h2>
                    <blockquote>
                      <q className="italic font-serif tracking-widest leading-normal">
                        When the soul finds silence within, even the storms
                        around you bow their heads in peace.
                      </q>
                    </blockquote>
                  </div>
                </div>
                <div className="md:flex overflow-hidden rounded-2xl bg-white max-w-full md:max-w-sm gap-[30px] inset-shadow-slate-300/20 inset-shadow-sm">
                  <div className="md:shrink-0">
                    <img
                      src="/Ramakrishna.jpg"
                      className="md:w-24 md:h-full w-full h-24 object-cover hidden md:block"
                    />
                  </div>
                  <div className="container mx-auto flex flex-col justify-between items-center p-6 gap-[10px]">
                    <h2 className="text-xl font-bold  tracking-tight italic">
                      Shri Ramakrishna ~
                    </h2>
                    <blockquote>
                      <q className="italic font-serif tracking-widest leading-normal">
                        When the soul grows within, the world around you awakens
                        too.
                      </q>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="prose prose-lg text-gray-800 tracking-wide leading-relaxed">
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                The Radiant Path: Yoga, Meditation, Relaxation & Spiritual
                Enlightenment
              </h1>

              <p className="text-base sm:text-lg mb-4">
                There is something primordial stirring in all of us—a deep
                longing for peace, harmony, meaning. In a world that never stops
                rushing,{" "}
                <span className="font-semibold">
                  yoga, meditation, relaxation, and spiritualism offer a
                  sanctuary
                </span>
                . This isn't just about touching your toes, sitting in silence,
                or chanting a mantra—it's about awakening something timeless
                within. What follows is a full exploration of how these
                disciplines work, where they come from, and how they can
                transform our lives.
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-10 mb-4">
                Ancient Roots: Where It All Began
              </h2>

              <p className="text-base sm:text-lg mb-4">
                Long before yoga mats or wellness influencers, the seeds of
                spiritual practice were planted in sacred texts, nature, and
                human longing.
              </p>

              <p className="mb-4">
                <strong>Vedic & Pre-Vedic Era:</strong> Yoga's earliest traces
                are found in the Vedas (Rig Veda, Atharva Veda) around 1500-500
                BCE. These texts combine hymns, rituals, chants that connect
                humankind with cosmic forces. Breath control, invocation of
                deities, and meditation in these times were ways to bridge the
                human with the Divine.{" "}
                <a
                  href="https://www.artofliving.org/us-en/yoga/beginners/yoga-history"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200"
                >
                  A Brief History of Yoga - Art of Living
                </a>
              </p>

              <p className="mb-4">
                <strong>Upanishads & The Gītā:</strong> As philosophy matured,
                awareness moved from ritual to contemplation. The Upanishads (c.
                800-400 BCE) emphasize self-realization and investigating the
                nature of the self (“Atman”) and ultimate reality (“Brahman”).
                The Bhagavad Gītā lays out paths—Karma (action), Bhakti
                (devotion), Jnāna (knowledge)—as different but complementary
                ways toward spiritual growth.{" "}
                <a
                  href="https://www.yogainternational.com/article/view/exploring-the-eight-limbs-of-yoga-a-path-to-enlightenment/?srsltid=AfmBOorKq2NosAPg5-qQUdICPIxxjsb0oxcCEdvwEjdnhefTqcdNYI2Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200"
                >
                  Exploring the Eight Limbs of Yoga - Yoga International
                </a>
              </p>

              <p className="mb-4">
                <strong>Patanjali's Yoga Sūtras & Classical Era:</strong> Around
                200 BCE-500 CE, the Yoga Sūtras codified yoga's essence in the
                eight-limb (Aṣṭāṅga) path — ethical values (Yamas), personal
                observances (Niyamas), asanas (postures), breath control
                (Pranayama), sense withdrawal (Pratyāhāra), concentration
                (Dharana), meditation (Dhyāna), and samādhi (union or
                enlightenment). Yoga becomes not just posture, but mind, ethical
                life, and spirit.
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-10 mb-4">
                What Relaxation & Meditation Truly Mean
              </h2>

              <p className="text-base sm:text-lg mb-4">
                Relaxation isn't laziness—it's essential recharging. Meditation
                isn't about forcefully emptying the mind (though many imagine
                that); it's about learning to observe the mind, the breath, the
                sensations without judgment. Scientific research shows that
                people who practice meditation regularly experience lower
                baseline stress, fewer intrusive thoughts, and a greater sense
                of calm in daily life. These practices steady the mind and
                nervous system, making room for inner clarity, emotional
                resilience, and deeper awakenings.
              </p>

              <p className="mb-4">
                <strong>Relaxation:</strong> This is more than resting
                physically. Deep, diaphragmatic breathing, releasing tension in
                muscles (especially around the jaw, shoulders, back), and
                calming the autonomic nervous system shift one's physiology from
                the fight-or-flight mode to a rest-and-digest mode. Studies in
                recent years have demonstrated measurable drops in cortisol and
                inflammatory markers when relaxation techniques are practiced
                for even twenty minutes daily. Sleep improves; immune system
                works more efficiently; heart rate variability (a marker of
                adaptability) increases. It's active letting go—not lazily
                disengaging, but gently guiding the body and mind into openness.
              </p>

              <p className="mb-4">
                <strong>Meditation:</strong> This includes many
                paths—mindfulness, breath awareness, loving-kindness (metta),
                mantra repetition, visualization, Kundalini, and more. The goal
                is to gradually shift one's identity: less reactive, less
                identified with transient thoughts or emotions, more capable of
                witnessing experience. Neuroimaging studies show that long-term
                meditators have thicker cortical regions associated with
                attention and sensory processing, reduced size of the amygdala
                (less reactivity to stress), and improved connectivity between
                brain regions involved in self-awareness and emotion regulation.
                Even brief interventions (10-15 minutes daily) have shown
                improvements in focus, mood, and perceptual clarity. ([PMCID,
                Meditation & Its Mental & Physical Health Benefits][0search0],
                [Healthline: 12 Science-Based Benefits of
                Meditation][0search12])
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-10 mb-4">
                Yoga: More Than Stretching
              </h2>

              <p className="text-base sm:text-lg mb-4">
                While many think of yoga simply as a set of postures, its deeper
                purpose includes energetic, psychological, and spiritual
                transformation. Yoga integrates asana (physical postures),
                pranayama (breathing techniques), and meditation to help the
                practitioner cultivate strength, flexibility, balance—not just
                of the body, but of mind and spirit. This holistic practice is
                backed by studies showing better physical health, reduced risk
                of chronic illness, and improved mental wellbeing for those who
                engage regularly.
              </p>

              <p className="mb-4">
                <strong>Asana & Pranayama:</strong> Physical postures prepare
                the body by opening stiff joints, strengthening muscles,
                improving circulation, and helping remove energetic blockages
                (in yogic language). Breath control—pranayama—regulates the
                intake and release of breath in intentional ways. Alternate
                nostril breathing, for instance, has been shown to balance
                autonomic responses; Kapalabhati and similar pranayama practices
                can improve lung function, reduce anxiety symptoms, and support
                mental clarity.
              </p>

              <p className="mb-4">
                <strong>Energy & Chakras:</strong> According to yogic
                philosophy, prana (life energy) flows through channels called
                nadis; chakras are energy centers along the spine. Although
                modern science is still exploring these ideas, recent articles
                (e.g. “Yoga's Energy Centers: What Science Says About the
                Chakras”) point out possible correlates: chakras may align with
                nerve plexuses or endocrine glands, and psychological theories
                associate them with emotional, cognitive, and developmental
                stages. ([YogaU; Yoga's Energy Centers][0search1]) Moreover, the
                concept of nadis (like ida, pingala, sushumna) illustrate how
                breath practices influence both physical and mental states.
                ([Himalayan Institute: Flow of Prana, Nadis,
                Chakras][0search17])
              </p>

              <p className="mb-4">
                <strong>The Path to Enlightenment:</strong> Enlightenment (also
                called samādhi, moksha, nirvana) is more than mystical
                experience—it is an inner shift. It's where suffering due to
                ignorance, craving, ego identification diminishes. In many
                traditions, enlightenment means living from insight: compassion,
                clarity, integrity, and continuous awareness. It is not about
                escaping life, but being fully awake within it.
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-10 mb-4">
                The Science & Benefits
              </h2>

              <p className="text-base sm:text-lg mb-4">
                The benefits of meditation, relaxation, and yoga are not just
                theoretical—they are measurable in body, mind, and brain.
                Longitudinal studies show reduced risk of cardiovascular
                disease, lower blood pressure, stronger immune response, and
                improvements in metabolic health. Mental health improves:
                depression, anxiety, PTSD symptoms often lessen when practices
                are regular and consistent. Brain imaging reveals thicker gray
                matter in areas controlling attention and emotional regulation.
              </p>

              <p className="mb-4">
                For example, a large-scale review (2023) found meditation
                practices reduce inflammation biomarkers and stress hormones,
                positively influence immune system function, and even affect
                telomere length (a biological marker of aging). ([PMC Article,
                Meditation & Its Mental & Physical Health Benefits][0search0])
                Another meta-analysis found mindfulness and meditation improve
                sleep quality significantly, especially in people suffering from
                insomnia or fragmented sleep. ([NCCIH: Meditation & Mindfulness
                Effectiveness][0search2])
              </p>

              <p className="mb-4">
                Emotional balance often follows: people report better sleep,
                more stable moods, less reactivity to daily stress, more
                patience and kindness toward themselves and others. These aren't
                small changes; over time they rewire how one responds to life's
                ups and downs.
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-10 mb-4">
                How to Start & Deepen Your Practice
              </h2>

              <p className="text-base sm:text-lg mb-4">
                Embarking on a deeper journey requires patience, consistency,
                and care. It's like cultivating a garden—you can't force flowers
                overnight, but daily tending yields blossoms.
              </p>

              <p className="mb-4">
                <strong>Set your intention:</strong> Begin by clarifying why you
                practice: to heal, to awaken, to connect, to grow. An intention
                anchors effort when motivation dips.
              </p>

              <p className="mb-4">
                <strong>Create routine:</strong> Even five to ten minutes each
                morning (or any consistent time) is powerful. Over weeks and
                months, this builds structural change in nervous system response
                and brain function.
              </p>

              <p className="mb-4">
                <strong>Ethics, Yamas & Niyamas:</strong> Practices of
                truthfulness, non-violence, purity, contentment etc., form the
                foundation of inner growth. Without them, meditation or yoga can
                produce temporary experience but not lasting transformation.
              </p>

              <p className="mb-4">
                <strong>Focus on posture & breath:</strong> Comfort in the body
                enables attention in the mind. Breath techniques help regulate
                physiological responses and deep mental states. Begin gently.
              </p>

              <p className="mb-4">
                <strong>Explore diverse meditation styles:</strong> You don't
                have to stick to one form. Some days mindfulness works; other
                days mantra, mantra + breath, visualization, or loving-kindness
                might resonate more.
              </p>

              <p className="mb-4">
                <strong>Incorporate rest :</strong> Allow time for full
                rest—sleep, shavasana, gentle walks, restorative practices.
                These let the nervous system integrate what you learn in
                meditation and yoga.
              </p>

              <p className="mb-4">
                <strong>Community & guidance:</strong> Teachers, sangha
                (spiritual groups), or supportive friends and mentors provide
                feedback, encouragement, and perspective. Learning from
                tradition, scripture, or lived practitioners adds depth and
                stability.
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-10 mb-4">
                Challenges & Misconceptions
              </h2>

              <p className="mb-4">
                <strong>Expecting instant enlightenment:</strong> Big, overnight
                shifts are rare. Most change is subtle, gradual, yet deeply
                transformative.
              </p>
              <p className="mb-4">
                <strong>Physical ≠ spiritual:</strong> Doing postures alone
                doesn't guarantee spiritual growth. Without breath awareness,
                ethics, and reflection, the practice remains partial.
              </p>
              <p className="mb-4">
                <strong>Escapism:</strong> Using meditation or yoga merely to
                avoid problems can lead to avoidance rather than transformation.
              </p>
              <p className="mb-4">
                <strong>Clinging to experiences:</strong> Peak states, visions,
                bliss may be alluring, but they are not the goal. Insight,
                integration, compassion are what last.
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-10 mb-4">
                The Light That Awaits: Transformations to Expect
              </h2>

              <p className="mb-4">
                <strong>Inner peace that isn't fragile:</strong> A peace not
                shaken by external circumstances—a lamp in darkness.
              </p>
              <p className="mb-4">
                <strong>Compassion & love:</strong> Boundaries soften, suffering
                becomes felt compassion, action arises from kindness.
              </p>
              <p className="mb-4">
                <strong>Clarity & wisdom:</strong> Recognizing thought patterns,
                subtle conditioning, choosing rather than reacting.
              </p>
              <p className="mb-4">
                <strong>Sense of connectedness:</strong> With nature, humanity,
                the wider web of life.
              </p>
              <p className="mb-4">
                <strong>Meaning & presence:</strong> Ordinary acts become
                infused with presence, life feels resonant, not just routine.
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-10 mb-4">
                Voices that Have Shaped the Landscape
              </h2>

              <p className="mb-4">
                <strong>Swami Vivekananda:</strong> He introduced yoga
                philosophy to the West, insisting it was more than physical
                postures but spiritual growth and moral discipline.
              </p>
              <p className="mb-4">
                <strong>Paramahansa Yogananda:</strong> His work, including{" "}
                <em>Autobiography of a Yogi</em>, inspired many to see spiritual
                growth as transcending religion and geography.
              </p>
              <p className="mb-4">
                <strong>Modern Teachers & Writers:</strong> Thought leaders in
                sources like Yoga Journal are exploring what enlightenment means
                today—more human, relational, less mystical and more integrated
                into daily life. For example see{" "}
                <a
                  href="https://www.yogajournal.com/yoga-101/spirituality/the-search-for-enlightenment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200"
                >
                  4 Spiritual Teachers Share Their Search for Enlightenment -
                  Yoga Journal
                </a>
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-10 mb-4">
                Thoughts that Have Changed the Perspective
              </h2>

              <p className="text-base sm:text-lg mb-4">
                Yoga, meditation, relaxation, spiritualism are not fads—they are
                heritages refined through millennia. The path is not always
                easy—but it doesn't need to be grandiose. Even a single breath,
                a moment of inner silence, or a kind action are the threads that
                lead you home.
              </p>
              <p className="text-base sm:text-lg">
                Enlightenment isn't “arriving somewhere distant,” but
                remembering something close: your true nature, your connection,
                your peace. May your journey be gentle, fierce, illuminating.
                And may every breath bring you a little closer to the unshakable
                core of your being.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};
export default Main;
