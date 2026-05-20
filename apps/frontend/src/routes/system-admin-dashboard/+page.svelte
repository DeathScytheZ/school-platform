<script>
import { enhance } from "$app/forms";
import { onMount } from "svelte";

let data = $state([]);
let message = $state('');

onMount(async () => {
    try {
        const response = await fetch("http://localhost:3000/api/system-admin-dashboard/request", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const responseData = await response.json();
        message = responseData.message;
        data = responseData.requests; 
        console.log(data);
    } catch(error) {
        console.error('error', error);
    }
});

</script>

<h1> {message} </h1>
{#if data.length > 0}
    <table>
        <thead>
            <tr>
                <th> Id </th>
                <th> official Id </th>
                <th> first name </th>
                <th> last name </th>
                <th> date of birth </th>
                <th> role </th>
                <th> role detail </th>
                <th> request date </th>
                <th> status </th>
                <th colspan="2"> action </th>
            </tr>
        </thead>
        <tbody>
            {#each data as row (row.id)}
                <tr>
                    <td> {row.id} </td>
                    <td> {row.official_id} </td>
                    <td> {row.first_name} </td>
                    <td> {row.last_name} </td>
                    <td> {row.date_of_birth} </td>
                    <td> {row.role} </td>
                    <td> {row.role_detail} </td>
                    <td> {row.request_date} </td>
                    <td> {row.status} </td>
                    <td>
                        <form method="POST" action="?/approveRequest" use:enhance>
                            <input type="hidden" name="id" value={row.id}>
                            <button type="submit"> approve </button>
                        </form>
                    </td>
                    <td>
                        <form method="POST" action="?/rejectRequest" use:enhance>
                            <input type="hidden" name="id" value={row.id}>
                            <button type="submit"> reject </button>
                        </form>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
{/if} 

<style>
.button {
    width: 60px;
}
</style>

