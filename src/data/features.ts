import { docs } from '../lib/url';

export interface Feature {
  id: string;
  name: string;
  summary: string;
  body: string[];
  docs: { label: string; href: string };
}

/** The 5 sections of /features, in page order. Text comes from the waffles README and docs. */
export const features: Feature[] = [
  {
    id: 'plan-outline',
    name: 'Plan outline',
    summary: 'A tree of goals and steps beside the chat that survives /clear and compaction.',
    body: [
      'Every goal in a checkout is a tree of steps, shown in a pane beside the chat and in the footer. Detours get their own steps, so you can always find the way back to the main work.',
      'The outline lives in the checkout’s git folder, not in the conversation, so /clear and compaction do not lose it. After each push, the outline is rendered into the pull request as a checklist.',
    ],
    docs: { label: 'Plan outline docs', href: docs('plan-outline.md') },
  },
  {
    id: 'modes',
    name: 'Modes',
    summary: '/prod for careful work, /rapid for quick iteration, /backlog-entry for capturing ideas.',
    body: [
      'Production mode runs tests, checks, and reviews, and commits each step. Rapid mode makes the change directly and commits nothing, so you can judge it and then keep or discard it. Backlog mode turns every prompt into a backlog item.',
      'Auto effort picks the reasoning effort for each prompt, so small questions stay fast.',
    ],
    docs: { label: 'Modes docs', href: docs('modes.md') },
  },
  {
    id: 'backlog',
    name: 'Backlog and work loop',
    summary: 'A backlog, grooming by question, and a loop that hands items to builders.',
    body: [
      '/waffles:backlog splits text into backlog items, in your tracker or in .backlog/ files. /waffles:backlog-review grooms items that are not ready by asking you one question at a time.',
      '/waffles:work-loop builds the backlog: background items go to builders, each in its own clone with its own draft pull request, and the rest stays with you.',
    ],
    docs: { label: 'Backlog docs', href: docs('backlog.md') },
  },
  {
    id: 'unattended-runs',
    name: 'Unattended runs',
    summary: 'Finish a task through pull requests while you are away.',
    body: [
      '/waffles:non-interactive makes decisions for you instead of asking, and carries the work all the way: it commits, merges through a pull request, and releases what the task calls for. Independent pieces are built in parallel, each by a builder in its own clone with its own draft pull request.',
      'The plugin grants a run no permissions of its own. A step that needs your approval is not prompted for: the run leaves it to you in the plan outline and finishes the rest.',
    ],
    docs: { label: 'Unattended runs docs', href: docs('unattended-runs.md') },
  },
  {
    id: 'pull-requests',
    name: 'Pull requests',
    summary: 'The checklist, the review branch, the merge queue, and CI watching.',
    body: [
      'After a push, the plan outline goes into the pull request. The review branch merges every pull request that waits for you into one local branch, so you can review them together.',
      '/waffles:watch-ci watches the CI and CD runs for the work you just pushed, reports success, and debugs failures.',
    ],
    docs: { label: 'Skills docs', href: docs('skills.md') },
  },
];

export const platforms = ['Claude Code', 'OpenCode 2', 'Codex', 'Cursor', 'Antigravity'] as const;

/** Features by platform, from the waffles README. */
export const platformMatrix: { feature: string; cells: string[] }[] = [
  { feature: 'Skills', cells: ['Yes', 'Yes, except plan', 'Yes', 'Yes', 'Yes'] },
  { feature: 'Modes', cells: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes'] },
  { feature: 'Plan outline tool', cells: ['Yes', 'Yes', 'Through MCP', 'Through MCP', 'Through MCP'] },
  { feature: 'Plan outline view', cells: ['Pane and footer', 'Panel and footer', 'No', 'No', 'No'] },
  { feature: 'Pull request checklist', cells: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes'] },
  { feature: 'Unattended runs', cells: ['Yes', 'Yes', 'Where its hooks run', 'No', 'Yes'] },
  { feature: 'Auto effort', cells: ['Yes', 'Yes', 'No', 'No', 'No'] },
  { feature: 'Dev servers menu', cells: ['Yes', 'No', 'No', 'No', 'No'] },
  { feature: 'waffles:* agents', cells: ['Yes', 'Its own agents', 'No', 'No', 'No'] },
];
