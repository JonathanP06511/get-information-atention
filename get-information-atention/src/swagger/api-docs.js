/**
 * @openapi
 * /apiviewappointments/{item_valueid}:
 *   get:
 *     summary: Retrieves appointments for a specific client by ID
 *     parameters:
 *       - in: path
 *         name: item_valueid
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Appointments retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idappointment:
 *                     type: integer
 *                     description: ID of the appointment
 *                   idclient:
 *                     type: integer
 *                     description: ID of the client
 *                   date:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time of the appointment
 *                   doctor:
 *                     type: string
 *                     description: Name of the doctor
 *                   reason:
 *                     type: string
 *                     description: Reason for the appointment
 *       500:
 *         description: Server error
 */