## Installation

```bash
git clone https://github.com/yuran1811/yuran1811-blog
npm i
npm run dev
```

## Configuration

### Step 1. Create an account and a project on Sanity

First, [create a Sanity account](https://sanity.io).

Then, install the Sanity cli from npm `npm i -g @sanity/cli`.

### Step 2. Create a new Sanity project

In a separate folder run `sanity init` to initialize a new studio project.

This will be where we manage our data.

When going through the init phase make sure to:

- Select **Yes** to the **Use the default dataset configuration** step
- Select **Clean project with no predefined schemas** for the **Select project template** step.

### Step 3. Generate an API token

Log into https://manage.sanity.io/ and choose the project you just created.

- Then from **Settings**, select **API**
- Then click **Add New Token** and create a token with the **Read** permission.

### Step 4. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` should be the `projectId` value from the `sanity.json` file created in [**Step 2**](#step-2-create-a-new-sanity-project).
- `NEXT_PUBLIC_SANITY_DATASET` should be the `dataset` value from the `sanity.json` file created in [**Step 2**](#step-2-create-a-new-sanity-project) - defaults to `production` if not set.

---

- `SANITY_API_TOKEN` should be the API token generated in the [**previous step**](#step-3-generate-an-api-token).
- `SANITY_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).
- `SANITY_STUDIO_REVALIDATE_SECRET` should be setup the same way as `SANITY_PREVIEW_SECRET` - this is used for [on-demand revalidation](https://nextjs.org/blog/next-12-1#on-demand-incremental-static-regeneration-beta) with [webhooks](https://www.sanity.io/docs/webhooks).

Your `.env.local` file should look like this:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=...

SANITY_API_TOKEN=...
SANITY_PREVIEW_SECRET=...
SANITY_STUDIO_REVALIDATE_SECRET=...
```

### Step 5. Prepare the project for previewing

5.1. Install the `@sanity/production-preview` plugin with `sanity install @sanity/production-preview`.

5.2. Create a file called `resolveProductionUrl.js` (we'll get back to that file in a bit).

5.3. Open your studio's sanity.json, and add the following entry to the parts-array:

```diff
{
  "plugins": [
    "@sanity/production-preview"
  ],
  "parts": [
    //...
+   {
+     "implements": "part:@sanity/production-preview/resolve-production-url",
+     "path": "./resolveProductionUrl.js"
+   }
  ]
}
```

Now, go back to `resolveProductionUrl.js` and add a function that will receive the full document that was selected for previewing:

```js
const previewSecret = 'MY_SECRET'; // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = 'http://localhost:3000';

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
```

For more information on live previewing check the [full guide.](https://www.sanity.io/guides/nextjs-live-preview)

### Step 6. Copy the schema file

After initializing your Sanity studio project there should be a `schemas` folder.

Replace the contents of `schema.js` in the Sanity studio project directory with [`./schemas/schema.js`](./schemas/schema.js) in this example directory. This will set up the schema we???ll use this for this example.

### Step 7. Populate Content

To add some content go to your Sanity studio project directory and run `sanity start`.

After the project has started and you have navigated to the URL given in the terminal, select **Author** and create a new record.

- You just need **1 Author record**.
- Use dummy data for the text.
- For the image, you can download one from [Unsplash](https://unsplash.com/).

Next, select **Post** and create a new record.

- We recommend creating at least **2 Post records**.
- Use dummy data for the text.
- You can write markdown for the **Content** field.
- For the images, you can download ones from [Unsplash](https://unsplash.com/).
- Pick the **Author** you created earlier.

**Important:** For each post record, you need to click **Publish** after saving. If not, the post will be in the draft state.

### Step 8. Run Next.js in development mode

```bash
npm i
npm run dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)!

### Step 9. Try preview mode

On Sanity, go to one of the posts you've created and:

- **Update the title**. For example, you can add `[Draft]` in front of the title.
- As you edit the document it will be saved as a draft, but **DO NOT** click **Publish**. By doing this, the post will be in the draft state.

Now, if you go to the post page on localhost, you won't see the updated title. However, if you use the **Preview Mode**, you'll be able to see the change ([Documentation](https://nextjs.org/docs/advanced-features/preview-mode)).

To view the preview, go to the post edit page on Sanity, click the three dots above the document and select **Open preview** ([see the instruction here](https://www.sanity.io/docs/preview-content-on-site))

You should now be able to see the updated title. To exit Preview Mode, you can click on _"Click here to exit preview mode"_ at the top.

### Step 10. Setup Revalidation Webhook

- Open your Sanity manager, go to **API**, and **Create new webhook**.
- Set the **URL** to use the Vercel app url from [Step 10](#step-10-deploy-on-vercel) and append `/api/revalidate`, for example: `https://cms-sanity.vercel.app/api/revalidate`
- Set the **Trigger on** field to <label><input type=checkbox checked> Create</label> <label><input type=checkbox checked> Update</label> <label><input type=checkbox checked> Delete</label>
- Set the **Filter** to `_type == "post" || _type == "author"`
- Set the **Secret** to the same value you gave `SANITY_STUDIO_REVALIDATE_SECRET` earlier.
- Hit **Save**!

#### Testing the Webhook

- Open the Deployment function log. (**Vercel Dashboard > Deployment > Functions** and filter by `api/revalidate`)
- Edit a Post in your Sanity Studio and publish.
- The log should start showing calls.
- And the published changes show up on the site after you reload.
