<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="h-screen flex overflow-hidden bg-white">
    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100"
        >
          <div class="flex-shrink-0 flex border-b border-gray-300 p-4">
            <a
              href="#"
              class="flex-shrink-0 w-full group flex items-center"
              @click="setIsOpen(true)"
            >
              <div class="flex items-center">
                <PlusIcon class="mr-3 h-6 w-6 group-hover:text-teal-400" />
                <span
                  class="
                    text-sm
                    font-medium
                    text-gray-700
                    group-hover:text-teal-400
                  "
                >
                  Add a subscription
                </span>
              </div>
            </a>
          </div>
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav class="mt-1 flex-1" aria-label="Sidebar">
              <div class="space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-gray-200 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  ]"
                >
                  <span class="inline-block relative">
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 h-6 w-6',
                      ]"
                      aria-hidden="true"
                    />
                    <span
                      v-if="item.dot"
                      class="
                        absolute
                        top-0
                        right-2
                        block
                        h-2
                        w-2
                        rounded-full
                        ring-1 ring-white
                        bg-red-400
                      "
                    />
                  </span>
                  <span class="truncate">
                    {{ item.name }}
                  </span>
                  <span
                    :class="[
                      item.current
                        ? 'bg-white'
                        : 'bg-gray-100 group-hover:bg-gray-200',
                      'ml-auto inline-block py-0.5 px-3 text-xs rounded-full',
                    ]"
                  >
                    10
                  </span>
                </a>
              </div>
              <div class="mt-8">
                <h3
                  class="
                    px-3
                    text-xs
                    font-semibold
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                  id="projects-headline"
                >
                  Subscriptions
                </h3>
                <div class="mt-1 space-y-1" aria-labelledby="projects-headline">
                  <a
                    href="#"
                    class="
                      group
                      flex
                      items-center
                      px-3
                      py-2
                      text-sm
                      font-medium
                      text-gray-600
                      rounded-md
                      hover:text-gray-900 hover:bg-gray-50
                    "
                  >
                    <span class="truncate"> Test </span>
                  </a>
                  <a
                    href="#"
                    class="
                      group
                      flex
                      items-center
                      px-3
                      py-2
                      text-sm
                      font-medium
                      text-gray-600
                      rounded-md
                      hover:text-gray-900 hover:bg-gray-50
                    "
                  >
                    <span class="truncate"> Test </span>
                  </a>
                  <a
                    href="#"
                    class="
                      group
                      flex
                      items-center
                      px-3
                      py-2
                      text-sm
                      font-medium
                      text-gray-600
                      rounded-md
                      hover:text-gray-900 hover:bg-gray-50
                    "
                  >
                    <span class="truncate"> Test </span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
      <div class="lg:hidden">
        <div
          class="
            flex
            items-center
            justify-between
            bg-gray-50
            border-b border-gray-200
            px-4
            py-1.5
          "
        >
          <div>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
          </div>
          <div>
            <button
              type="button"
              class="
                -mr-3
                h-12
                w-12
                inline-flex
                items-center
                justify-center
                rounded-md
                text-gray-500
                hover:text-gray-900
              "
              @click="sidebarOpen = true"
            >
              <span class="sr-only">Open sidebar</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1 relative z-0 flex overflow-hidden">
        <main
          class="
            flex-1
            relative
            z-0
            overflow-y-auto
            focus:outline-none
            xl:order-last
          "
        >
          <!-- Start main area-->
          <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div
              class="h-full border-2 border-gray-200 border-dashed rounded-lg"
            />
          </div>
          <!-- End main area -->
        </main>
        <aside
          class="
            hidden
            relative
            xl:order-first xl:flex xl:flex-col
            flex-shrink-0
            w-96
            border-r border-gray-200
          "
        >
          <!-- Start secondary column (hidden on smaller screens) -->
          <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div
              class="h-full border-2 border-gray-200 border-dashed rounded-lg"
            />
          </div>
          <!-- End secondary column -->
        </aside>
      </div>
    </div>
    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        static
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="open = false"
        :open="open"
      >
        <div
          class="
            flex
            items-end
            justify-center
            min-h-screen
            pt-4
            px-4
            pb-20
            text-center
            sm:block sm:p-0
          "
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="
                inline-block
                align-bottom
                bg-white
                px-0
                pt-0
                pb-0
                text-left
                overflow-hidden
                shadow-xl
                transform
                transition-all
                sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-0
              "
            >
              <div>
                <div>
                  <label
                    for="company_website"
                    class="block text-sm font-medium text-gray-700 sr-only"
                  >
                    Add subscription
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <span
                      class="
                        inline-flex
                        items-center
                        px-3
                        border border-r-0 border-gray-300
                        bg-gray-50
                        text-gray-500
                        sm:text-sm
                      "
                    >
                      http://
                    </span>
                    <input
                      type="text"
                      name="company_website"
                      id="company_website"
                      class="
                        flex-1
                        min-w-0
                        block
                        w-full
                        px-3
                        py-2
                        focus:ring-indigo-500 focus:border-indigo-500
                        sm:text-sm
                        border-gray-300
                      "
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <!-- <DialogTitle
                    as="h3"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    Payment successful
                  </DialogTitle> -->
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  ViewListIcon,
  MapIcon,
  MenuIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  XIcon,
  StarIcon,
  PlusIcon,
} from "@heroicons/vue/outline";

const navigation = [
  {
    name: "All Feeds",
    href: "#",
    icon: ViewListIcon,
    current: true,
    dot: false,
  },
  { name: "Favourites", href: "#", icon: StarIcon, current: false, dot: false },
  {
    name: "Unread articles",
    href: "#",
    icon: ViewListIcon,
    current: false,
    dot: true,
  },
  {
    name: "Recently read",
    href: "#",
    icon: SearchCircleIcon,
    current: false,
    dot: false,
  },
  {
    name: "Recently played",
    href: "#",
    icon: SpeakerphoneIcon,
    current: false,
  },
  { name: "Saved articles", href: "#", icon: MapIcon, current: false },
];

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    PlusIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    const sidebarOpen = ref(false);
    let open = ref(false);

    const setIsOpen = (value) => {
      open.value = value;
    };

    return {
      navigation,
      sidebarOpen,
      setIsOpen,
      open,
    };
  },
};
</script>
