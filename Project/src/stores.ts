import { writable } from 'svelte/store';
import type { Channel, Subscription } from './models/Channel';

export let deleteSubscription = writable<Subscription>({name: '', channelCode: '', credits: 0})
export let pageData = writable<Subscription | Channel | any>()