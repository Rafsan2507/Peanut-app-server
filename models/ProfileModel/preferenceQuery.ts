import Preferences from "./preferenceModel";

export async function addPreferences(userId: number, preferences: number[]) {
    try {
        const newPreferences = await Promise.all(
            preferences.map(async (likesId) => {
                const preference = await Preferences.create({ userId, likesId });
                return preference;
            })
        );
        return newPreferences;
    } catch (error) {
        console.error("Error in addPreferences:", error);
        throw new Error("Error adding preferences.");
    }
}


  