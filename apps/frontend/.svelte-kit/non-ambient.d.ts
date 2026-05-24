
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/announcements" | "/auth" | "/child-dashboard" | "/parent-dashboard" | "/staff-dashboard" | "/staff-dashboard/announcements" | "/system-admin-dashboard" | "/system-admin-dashboard/add-child" | "/system-admin-dashboard/add-parent" | "/system-admin-dashboard/announcements" | "/system-admin-dashboard/create-class" | "/system-admin-dashboard/registration-requests" | "/system-admin-dashboard/users" | "/teacher-dashboard";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/announcements": Record<string, never>;
			"/auth": Record<string, never>;
			"/child-dashboard": Record<string, never>;
			"/parent-dashboard": Record<string, never>;
			"/staff-dashboard": Record<string, never>;
			"/staff-dashboard/announcements": Record<string, never>;
			"/system-admin-dashboard": Record<string, never>;
			"/system-admin-dashboard/add-child": Record<string, never>;
			"/system-admin-dashboard/add-parent": Record<string, never>;
			"/system-admin-dashboard/announcements": Record<string, never>;
			"/system-admin-dashboard/create-class": Record<string, never>;
			"/system-admin-dashboard/registration-requests": Record<string, never>;
			"/system-admin-dashboard/users": Record<string, never>;
			"/teacher-dashboard": Record<string, never>
		};
		Pathname(): "/" | "/auth" | "/child-dashboard" | "/parent-dashboard" | "/staff-dashboard" | "/staff-dashboard/announcements" | "/system-admin-dashboard" | "/system-admin-dashboard/add-child" | "/system-admin-dashboard/add-parent" | "/system-admin-dashboard/announcements" | "/system-admin-dashboard/create-class" | "/system-admin-dashboard/registration-requests" | "/system-admin-dashboard/users" | "/teacher-dashboard";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/agnes-tachyon-uma-musume.gif" | "/favicon.svg" | "/robots.txt" | "/uma-musume-meep.gif" | string & {};
	}
}